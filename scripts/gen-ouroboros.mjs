/*
  Parametric ouroboros generator (author once, freeze the `d` strings, ship inline).
  Produces three paths on a 0..200 viewBox, all sharing one geometry:
   - body:   filled organic taper (fat head -> hairline tail) with a true over/under bite
   - line:   single hairline continuous-line mark (near-circle, ends overlap = the bite) + head wedge
   - ring:   a clean centerline circle for the scroll-progress spine (stroke-drawn)
  Geometry per design spec: one-turn Archimedean spiral so the head passes OUTSIDE the tail
  (real over/under, no collision), golden-ratio proportions.
*/
import { writeFileSync } from 'node:fs'

const VB = 200
const cx = 100, cy = 100
const PHI = 1.618

// Golden-ratio sheet: centerline radius R, body half-thickness from 0.382R.
const R = 62                 // centerline radius (inner hole ~ R/phi)
const wHead = 0.382 * R * 0.5 // ~11.8 half-thickness at head
const wTail = 1.4
const taperK = 1.35
const spiralOffset = wHead * 1.9 // head sits clearly outside the tail
const N = 220

const TAU = Math.PI * 2
// start angle at top (-90deg) so the bite reads at the top-right (golden 137.5 feel)
const a0 = -Math.PI / 2

const rAt = (u) => R + spiralOffset * u           // u = t/TAU in [0,1]
const wAt = (u) => wTail + (wHead - wTail) * Math.pow(u, taperK)
const pt = (r, ang) => [cx + r * Math.cos(ang), cy + r * Math.sin(ang)]
const f = (n) => Number(n.toFixed(2))

// ---- filled body: walk outer edge 0->TAU, then inner edge TAU->0 ----
function buildBody() {
  const outer = [], inner = []
  for (let i = 0; i <= N; i++) {
    const u = i / N
    const t = u * TAU
    const ang = a0 + t
    const r = rAt(u), w = wAt(u)
    outer.push(pt(r + w, ang))
    inner.push(pt(r - w, ang))
  }
  let d = `M ${f(outer[0][0])} ${f(outer[0][1])}`
  for (let i = 1; i < outer.length; i++) d += ` L ${f(outer[i][0])} ${f(outer[i][1])}`
  // round the head cap across to the inner edge (head is at the end, u=1)
  const hi = inner.length - 1
  d += ` L ${f(inner[hi][0])} ${f(inner[hi][1])}`
  for (let i = inner.length - 2; i >= 0; i--) d += ` L ${f(inner[i][0])} ${f(inner[i][1])}`
  d += ' Z'
  return d
}

// Elegant serpent head that curls inward and CLOSES THE BITE over the tail tip.
// Built from smooth cubic curves: an upper jaw sweeping down to the snout, and a
// lower jaw that hooks under the tail (the mouth wraps the tail = the bite).
function headPoints() {
  const ang = a0 + TAU            // head base angle (top)
  const r = rAt(1), w = wAt(1)
  const baseOuter = pt(r + w * 1.15, ang)
  const baseInner = pt(r - w * 1.15, ang)
  // tail tip (u=0): the thing being bitten
  const tailAng = a0
  const tailTip = pt(R, tailAng - 0.02)
  // snout reaches just past the tail tip (overlap = real bite)
  const snout = [tailTip[0] + 2.5, tailTip[1] + 1.5]
  return { ang, r, w, baseOuter, baseInner, tailTip, snout }
}

function buildHead() {
  const ang = a0 + TAU
  const r = rAt(1), w = wAt(1)
  // A clean, voluminous serpent head: a rounded triangle whose snout overlaps the
  // tail tip (the bite). Slightly convex jaws via quadratics keep it organic, not sharp.
  const A = pt(r + w * 1.35, ang - 0.16)   // upper-back of head (outer)
  const C = pt(r - w * 1.15, ang + 0.02)   // lower-back of head (inner)
  const tailTip = pt(R, a0 - 0.02)
  const tip = [tailTip[0] + 3.5, tailTip[1] + 1.5] // snout, overlapping the tail
  // convex control points (bulge the jaws outward, away from the head's centroid)
  const mid = [(A[0] + C[0] + tip[0]) / 3, (A[1] + C[1] + tip[1]) / 3]
  const bulge = (p, q, k) => {
    const m = [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2]
    return [m[0] + (m[0] - mid[0]) * k, m[1] + (m[1] - mid[1]) * k]
  }
  const cUpper = bulge(A, tip, 0.42)
  const cLower = bulge(tip, C, 0.30)
  const cBack = bulge(C, A, 0.18)
  return (
    `M ${f(A[0])} ${f(A[1])} ` +
    `Q ${f(cUpper[0])} ${f(cUpper[1])} ${f(tip[0])} ${f(tip[1])} ` +
    `Q ${f(cLower[0])} ${f(cLower[1])} ${f(C[0])} ${f(C[1])} ` +
    `Q ${f(cBack[0])} ${f(cBack[1])} ${f(A[0])} ${f(A[1])} Z`
  )
}

// eye dot at golden position on the head
function buildEye() {
  const ang = a0 + TAU
  const r = rAt(1), w = wAt(1)
  const A = pt(r + w * 1.35, ang - 0.16)
  const tailTip = pt(R, a0 - 0.02)
  const tip = [tailTip[0] + 3.5, tailTip[1] + 1.5]
  return { cx: f(A[0] * 0.58 + tip[0] * 0.42), cy: f(A[1] * 0.58 + tip[1] * 0.42), r: 2.0 }
}

// ---- hairline single-line mark: near-full circle, ends overlap ~10deg = the bite ----
function buildLine() {
  const rl = R
  const gapStart = a0 + 0.16      // tail end
  const gapEnd = a0 + TAU + 0.02  // head end overlaps just past the tail
  const steps = 200
  let d = ''
  for (let i = 0; i <= steps; i++) {
    const ang = gapStart + (gapEnd - gapStart) * (i / steps)
    const wob = 1 + 0.012 * Math.sin(3 * ang) // whisper of organic wobble
    const [x, y] = pt(rl * wob, ang)
    d += (i === 0 ? 'M' : 'L') + ` ${f(x)} ${f(y)}`
  }
  return d
}

// small head wedge for the line mark, at the head end
function buildLineHead() {
  const ang = a0 + TAU + 0.02
  const r = R
  const [bx, by] = pt(r, ang)
  const [t1x, t1y] = pt(r + 6, ang - 0.06)
  const [t2x, t2y] = pt(r - 5.5, ang - 0.10)
  const [tipx, tipy] = pt(r - 1, ang + 0.11)
  return `M ${f(bx)} ${f(by)} L ${f(t1x)} ${f(t1y)} L ${f(tipx)} ${f(tipy)} L ${f(t2x)} ${f(t2y)} Z`
}

// clean centerline circle for the scroll spine (SVG circle expressed as a path)
function buildRing() {
  const r = R
  const [sx, sy] = [cx, cy - r]
  return `M ${f(sx)} ${f(sy)} A ${r} ${r} 0 1 1 ${f(cx - 0.01)} ${f(cy - r)} Z`
}

const out = {
  viewBox: `0 0 ${VB} ${VB}`,
  cx, cy, R, PHI,
  body: buildBody(),
  head: buildHead(),
  eye: buildEye(),
  line: buildLine(),
  lineHead: buildLineHead(),
  ring: buildRing(),
}

const ts = `// AUTO-GENERATED by scripts/gen-ouroboros.mjs — do not edit by hand.
// One ouroboros geometry, three renderings (filled body, hairline line-mark, spine ring).
export const OURO = ${JSON.stringify(out, null, 2)} as const
`
writeFileSync(new URL('../src/lib/ouroboros-paths.ts', import.meta.url), ts)
console.log('wrote src/lib/ouroboros-paths.ts')
console.log('body len', out.body.length, '| line len', out.line.length)
