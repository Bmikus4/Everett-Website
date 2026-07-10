import { createNoise3D } from 'simplex-noise'

/*
  OURO PRAXIS hero field — a live generative ouroboros on warm pastel paper.
  ~2,500 particles seeded along a superellipse ring, spring-bound to it while
  advected by divergence-free curl noise, laced with proximity lines, with a
  Gaussian rebirth pulse (dead grey -> living pastel + gold comet) travelling
  the loop forever. Cursor parallax + spotlight. Framerate-independent (dt-clamped).

  Perf: the curl field is sampled on a coarse grid once per frame and bilinearly
  interpolated per particle, so noise evals stay ~5k/frame, not millions.
*/

type RGB = [number, number, number]
const hexToRgb = (h: string): RGB => {
  const n = parseInt(h.slice(1), 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}
const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const mix = (a: RGB, b: RGB, t: number): RGB => [
  lerp(a[0], b[0], t),
  lerp(a[1], b[1], t),
  lerp(a[2], b[2], t),
]

const PALETTE = {
  paper: hexToRgb('#f7f4ee'),
  sunken: hexToRgb('#f0ece3'),
  dead: [hexToRgb('#c9c3d6'), hexToRgb('#b8c4d0')] as RGB[],
  alive: [hexToRgb('#b9e3d0'), hexToRgb('#f4c9b0'), hexToRgb('#f3c4d2')] as RGB[],
  gold: hexToRgb('#e6c98b'),
  clay: hexToRgb('#b5654a'),
  wash: [hexToRgb('#dad3f0'), hexToRgb('#f6ddc7'), hexToRgb('#cde4d6')] as RGB[],
  line: hexToRgb('#8f86a6'),
}

interface Particle {
  theta: number
  rho: number
  depth: number
  x: number
  y: number
  vx: number
  vy: number
  dead: RGB
  alive: RGB
  size: number
}

const TAU = Math.PI * 2

export interface HeroFieldOptions {
  reducedMotion?: boolean
}

export function startHeroField(canvas: HTMLCanvasElement, opts: HeroFieldOptions = {}) {
  // alpha:true so the paper section shows through before the first frame paints
  // (no black flash). Each frame still fills an opaque paper base first.
  const ctx = canvas.getContext('2d', { alpha: true })!
  const noise = createNoise3D()

  let W = 0, H = 0, dpr = 1
  let cx = 0, cy = 0, R = 0
  const N_SUPER = 3.0
  let particles: Particle[] = []
  let ringLUT: { x: number; y: number; nx: number; ny: number }[] = []

  // cursor
  let mx = 0, my = 0, msx = 0, msy = 0, hasMouse = false

  // flow grid
  const GRID = 26
  let gvx: number[] = [], gvy: number[] = []

  const FLOW_F = 0.0035
  const OMEGA = 0.06
  const K_SPRING = 6.0
  const A_FLOW = 22
  const T_LOOP = 7 // seconds per rebirth revolution
  const PULSE_W = 0.3
  const D_MAX = 118

  const superellipse = (t: number, T: number) => {
    const ct = Math.cos(t), st = Math.sin(t)
    const ex = Math.sign(ct) * Math.pow(Math.abs(ct), 2 / N_SUPER)
    const ey = Math.sign(st) * Math.pow(Math.abs(st), 2 / N_SUPER)
    const wob = 1 + 0.055 * Math.sin(3 * t + 0.2 * T)
    return { x: cx + R * ex * wob, y: cy + R * ey * wob }
  }

  const buildLUT = () => {
    ringLUT = []
    const S = 512
    for (let i = 0; i < S; i++) {
      const t = (i / S) * TAU
      const p = superellipse(t, 0)
      const p2 = superellipse(t + 0.01, 0)
      let dx = p2.x - p.x, dy = p2.y - p.y
      const len = Math.hypot(dx, dy) || 1
      dx /= len; dy /= len
      ringLUT.push({ x: p.x, y: p.y, nx: -dy, ny: dx })
    }
  }
  const ringAt = (theta: number) => {
    const idx = ((theta % TAU) + TAU) % TAU / TAU * ringLUT.length
    return ringLUT[Math.floor(idx) % ringLUT.length]
  }

  const seed = () => {
    const target = Math.round((W * H) / 12000)
    const count = Math.max(1400, Math.min(2600, target))
    particles = []
    for (let i = 0; i < count; i++) {
      // truncated-gaussian radial offset
      let g = 0
      for (let k = 0; k < 3; k++) g += Math.random()
      g = (g / 3 - 0.5) * 2 // ~[-1,1] bell
      const depth = Math.random()
      particles.push({
        theta: Math.random() * TAU,
        rho: g * 0.075 * R,
        depth,
        x: 0, y: 0, vx: 0, vy: 0,
        dead: PALETTE.dead[i % PALETTE.dead.length],
        alive: PALETTE.alive[i % PALETTE.alive.length],
        size: 0.6 + 0.9 * depth,
      })
    }
    for (const p of particles) {
      const r = ringAt(p.theta)
      p.x = r.x + p.rho * r.nx
      p.y = r.y + p.rho * r.ny
    }
  }

  const resize = () => {
    const rect = canvas.getBoundingClientRect()
    W = rect.width; H = rect.height
    dpr = Math.min(window.devicePixelRatio || 1, matchMedia('(pointer: coarse)').matches ? 1.5 : 2)
    canvas.width = Math.round(W * dpr)
    canvas.height = Math.round(H * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    cx = W / 2
    cy = H * 0.5
    R = 0.38 * Math.min(W, H)
    buildLUT()
    seed()
  }

  // fBm potential
  const psi = (x: number, y: number, T: number) => {
    let v = 0
    for (let o = 0; o < 3; o++) {
      const f = FLOW_F * Math.pow(2, o)
      v += Math.pow(0.5, o) * noise(x * f, y * f, T * 0.08)
    }
    return v
  }

  const computeFlowGrid = (T: number) => {
    const eps = 1.5
    const stepX = W / GRID, stepY = H / GRID
    for (let j = 0; j <= GRID; j++) {
      for (let i = 0; i <= GRID; i++) {
        const x = i * stepX, y = j * stepY
        const vx = (psi(x, y + eps, T) - psi(x, y - eps, T)) / (2 * eps)
        const vy = -(psi(x + eps, y, T) - psi(x - eps, y, T)) / (2 * eps)
        gvx[j * (GRID + 1) + i] = vx
        gvy[j * (GRID + 1) + i] = vy
      }
    }
  }
  const sampleFlow = (x: number, y: number): [number, number] => {
    const gx = Math.max(0, Math.min(GRID - 0.001, (x / W) * GRID))
    const gy = Math.max(0, Math.min(GRID - 0.001, (y / H) * GRID))
    const i = Math.floor(gx), j = Math.floor(gy)
    const fx = gx - i, fy = gy - j
    const idx = (jj: number, ii: number) => jj * (GRID + 1) + ii
    const bl = (arr: number[]) =>
      lerp(lerp(arr[idx(j, i)], arr[idx(j, i + 1)], fx), lerp(arr[idx(j + 1, i)], arr[idx(j + 1, i + 1)], fx), fy)
    // noise curl is unit-scale; multiply for visible advection
    return [bl(gvx) * 2600, bl(gvy) * 2600]
  }

  // spatial hash for proximity lines
  const drawLines = () => {
    const cell = D_MAX
    const cols = Math.ceil(W / cell) + 1
    const buckets = new Map<number, number[]>()
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]
      const key = Math.floor(p.y / cell) * cols + Math.floor(p.x / cell)
      let b = buckets.get(key)
      if (!b) buckets.set(key, (b = []))
      b.push(i)
    }
    ctx.globalCompositeOperation = 'multiply'
    ctx.lineWidth = 1
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]
      let conns = 0
      const bcx = Math.floor(p.x / cell), bcy = Math.floor(p.y / cell)
      for (let dy = -1; dy <= 1 && conns < 4; dy++) {
        for (let dx = -1; dx <= 1 && conns < 4; dx++) {
          const b = buckets.get((bcy + dy) * cols + (bcx + dx))
          if (!b) continue
          for (const jIdx of b) {
            if (jIdx <= i) continue
            const q = particles[jIdx]
            const ddx = p.x - q.x, ddy = p.y - q.y
            const dist = Math.hypot(ddx, ddy)
            if (dist > D_MAX) continue
            const a = 0.42 * Math.pow(1 - dist / D_MAX, 2) * Math.min(p.depth + 0.3, 1) * Math.min(q.depth + 0.3, 1)
            if (a < 0.015) continue
            ctx.strokeStyle = `rgba(${PALETTE.line[0]},${PALETTE.line[1]},${PALETTE.line[2]},${a})`
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
            if (++conns >= 4) break
          }
        }
      }
    }
    ctx.globalCompositeOperation = 'source-over'
  }

  const drawBackground = (T: number) => {
    // paper base
    ctx.fillStyle = `rgb(${PALETTE.paper[0]},${PALETTE.paper[1]},${PALETTE.paper[2]})`
    ctx.fillRect(0, 0, W, H)
    // slow drifting pastel washes (mesh-gradient feel), very low alpha
    const blobs = [
      { c: PALETTE.wash[0], ox: 0.30, oy: 0.28, s: 0.9, sp: 0.05 },
      { c: PALETTE.wash[1], ox: 0.72, oy: 0.66, s: 0.8, sp: 0.037 },
      { c: PALETTE.wash[2], ox: 0.60, oy: 0.20, s: 0.7, sp: 0.043 },
    ]
    for (const b of blobs) {
      const bx = (b.ox + 0.04 * Math.sin(T * b.sp)) * W
      const by = (b.oy + 0.05 * Math.cos(T * b.sp * 1.3)) * H
      const rad = b.s * Math.max(W, H) * 0.5
      const g = ctx.createRadialGradient(bx, by, 0, bx, by, rad)
      g.addColorStop(0, `rgba(${b.c[0]},${b.c[1]},${b.c[2]},0.5)`)
      g.addColorStop(1, `rgba(${b.c[0]},${b.c[1]},${b.c[2]},0)`)
      ctx.globalCompositeOperation = 'multiply'
      ctx.fillStyle = g
      ctx.fillRect(0, 0, W, H)
    }
    ctx.globalCompositeOperation = 'source-over'
  }

  let last = 0
  let running = false
  let raf = 0
  const reduced = !!opts.reducedMotion

  const step = (nowMs: number) => {
    const now = nowMs / 1000
    const dt = last ? Math.min(now - last, 1 / 30) : 1 / 60
    last = now
    const T = now

    // smooth cursor
    msx += (mx - msx) * 0.08
    msy += (my - msy) * 0.08

    computeFlowGrid(T)
    drawBackground(T)

    // rebirth pulse position
    const phi = ((T / T_LOOP) * TAU) % TAU

    // integrate + draw particles
    const damp = Math.pow(0.86, dt * 60)
    for (const p of particles) {
      p.theta += OMEGA * dt
      const ring = ringAt(p.theta)
      const tx = ring.x + p.rho * ring.nx
      const ty = ring.y + p.rho * ring.ny
      const [fx, fy] = sampleFlow(p.x, p.y)
      const ax = K_SPRING * (tx - p.x) + A_FLOW * fx * 0.02
      const ay = K_SPRING * (ty - p.y) + A_FLOW * fy * 0.02
      p.vx = (p.vx + dt * ax) * damp
      p.vy = (p.vy + dt * ay) * damp
      p.x += dt * p.vx * 60
      p.y += dt * p.vy * 60

      // pulse influence
      let dth = Math.abs(p.theta % TAU - phi)
      if (dth > Math.PI) dth = TAU - dth
      const g = Math.exp(-(dth * dth) / (2 * PULSE_W * PULSE_W))

      // parallax offset for drawing (near particles move more)
      const px = p.x + msx * 20 * p.depth
      const py = p.y + msy * 20 * p.depth

      // spotlight near cursor
      let spot = 1
      if (hasMouse) {
        const sd = Math.hypot(px - (msx * 0.5 + 0.5) * W, py - (msy * 0.5 + 0.5) * H)
        if (sd < 220) spot = 1 + 1.1 * (1 - sd / 220)
      }

      const col = mix(p.dead, p.alive, Math.min(g * 1.1, 1))
      const size = p.size * (1 + 1.8 * g) * (0.9 + 0.3 * p.depth)
      const alpha = Math.min((0.35 + 0.55 * p.depth + 0.6 * g) * spot, 1)
      ctx.fillStyle = `rgba(${col[0] | 0},${col[1] | 0},${col[2] | 0},${alpha})`
      ctx.beginPath()
      ctx.arc(px, py, size, 0, TAU)
      ctx.fill()
    }

    drawLines()

    // travelling comet (the serpent's soul) at the pulse head
    const cometPos = superellipse(phi, T)
    const warm = Math.floor(T / T_LOOP) % 6 === 0
    const coreCol = warm ? PALETTE.clay : PALETTE.gold
    ctx.globalCompositeOperation = 'lighter'
    for (let tSeg = 0; tSeg < 6; tSeg++) {
      const tt = phi - tSeg * 0.05
      const cp = superellipse(tt, T)
      const a = (1 - tSeg / 6) * 0.5
      const rad = 7 - tSeg
      ctx.shadowColor = `rgba(${coreCol[0]},${coreCol[1]},${coreCol[2]},0.9)`
      ctx.shadowBlur = 12
      ctx.fillStyle = `rgba(${coreCol[0]},${coreCol[1]},${coreCol[2]},${a})`
      ctx.beginPath()
      ctx.arc(cp.x + msx * 8, cp.y + msy * 8, Math.max(rad, 1.5), 0, TAU)
      ctx.fill()
    }
    ctx.shadowBlur = 0
    ctx.globalCompositeOperation = 'source-over'
    void cometPos

    if (running) raf = requestAnimationFrame(step)
  }

  const renderStill = () => {
    // one resolved frame: pulse at rest at the mouth, ring fully formed
    last = 0
    computeFlowGrid(0)
    drawBackground(0)
    const phi = 0
    for (const p of particles) {
      const ring = ringAt(p.theta)
      p.x = ring.x + p.rho * ring.nx
      p.y = ring.y + p.rho * ring.ny
      let dth = Math.abs(p.theta % TAU - phi)
      if (dth > Math.PI) dth = TAU - dth
      const g = Math.exp(-(dth * dth) / (2 * PULSE_W * PULSE_W))
      const col = mix(p.dead, p.alive, Math.min(g, 1))
      const alpha = Math.min(0.35 + 0.55 * p.depth + 0.4 * g, 1)
      ctx.fillStyle = `rgba(${col[0] | 0},${col[1] | 0},${col[2] | 0},${alpha})`
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, TAU)
      ctx.fill()
    }
    drawLines()
  }

  const start = () => {
    if (running || reduced) return
    running = true
    last = 0
    raf = requestAnimationFrame(step)
  }
  const stop = () => {
    running = false
    if (raf) cancelAnimationFrame(raf)
  }

  // events
  const onMove = (e: PointerEvent) => {
    const rect = canvas.getBoundingClientRect()
    mx = ((e.clientX - rect.left) / rect.width) * 2 - 1
    my = ((e.clientY - rect.top) / rect.height) * 2 - 1
    hasMouse = true
  }
  const onLeave = () => { hasMouse = false; mx = 0; my = 0 }
  const onVisibility = () => { if (document.hidden) stop(); else if (!reduced) start() }

  const io = new IntersectionObserver(
    (entries) => {
      if (reduced) return
      if (entries[0].isIntersecting) start()
      else stop()
    },
    { threshold: 0 },
  )

  resize()
  gvx = new Array((GRID + 1) * (GRID + 1)).fill(0)
  gvy = new Array((GRID + 1) * (GRID + 1)).fill(0)
  if (reduced) {
    renderStill()
  } else {
    window.addEventListener('pointermove', onMove, { passive: true })
    canvas.addEventListener('pointerleave', onLeave)
    document.addEventListener('visibilitychange', onVisibility)
    io.observe(canvas)
    start()
  }

  const onResize = () => { resize(); if (reduced) renderStill() }
  window.addEventListener('resize', onResize)

  return {
    destroy() {
      stop()
      io.disconnect()
      window.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('resize', onResize)
    },
  }
}
