import { chromium } from 'playwright'

const URL = 'http://localhost:4173/Everett-Website/'
const OUT = 'scripts/shots'
import { mkdirSync } from 'node:fs'
mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch()

async function shoot(name, width, height, opts = {}) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 })
  await page.goto(URL, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1800) // let canvas boot + fonts settle
  if (opts.scrollTo != null) {
    await page.evaluate((y) => window.scrollTo(0, y), opts.scrollTo)
    await page.waitForTimeout(1200)
  }
  if (opts.full) {
    await page.evaluate(async () => {
      await new Promise((res) => {
        let y = 0
        const t = setInterval(() => { window.scrollTo(0, y); y += 600; if (y > document.body.scrollHeight) { clearInterval(t); res() } }, 60)
      })
    })
    await page.waitForTimeout(800)
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.waitForTimeout(400)
  }
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: !!opts.full })
  await page.close()
  console.log('shot', name)
}

// hero (viewport only)
await shoot('01-hero', 1440, 900)
// full desktop page
await shoot('02-full-desktop', 1440, 900, { full: true })
// specific sections by scroll
await shoot('03-calculator', 1440, 900, { scrollTo: 3400 })
// mobile
await shoot('04-hero-mobile', 390, 844)
await shoot('05-full-mobile', 390, 844, { full: true })

await browser.close()
console.log('done')
