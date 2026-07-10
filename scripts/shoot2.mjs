import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'
const URL = 'http://localhost:4174/'
mkdirSync('scripts/shots2', { recursive: true })
const browser = await chromium.launch()
async function shoot(name, w, h, opts={}) {
  const page = await browser.newPage({ viewport: { width: w, height: h } })
  await page.goto(URL, { waitUntil: 'networkidle' })
  await page.waitForTimeout(2200)
  if (opts.scrollTo != null) { await page.evaluate(y=>window.scrollTo(0,y), opts.scrollTo); await page.waitForTimeout(1400) }
  if (opts.full) {
    await page.evaluate(async()=>{await new Promise(r=>{let y=0;const t=setInterval(()=>{window.scrollTo(0,y);y+=500;if(y>document.body.scrollHeight){clearInterval(t);r()}},50)})})
    await page.waitForTimeout(600); await page.evaluate(()=>window.scrollTo(0,0)); await page.waitForTimeout(400)
  }
  await page.screenshot({ path:`scripts/shots2/${name}.png`, fullPage: !!opts.full })
  await page.close(); console.log('shot', name)
}
await shoot('01-hero', 1440, 900)
await shoot('02-full', 1440, 900, { full:true })
await shoot('03-how', 1440, 900, { scrollTo: 2200 })
await shoot('04-hero-mobile', 390, 844)
await browser.close(); console.log('done')
