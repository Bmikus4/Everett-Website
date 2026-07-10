import { chromium } from 'playwright'
const URL = process.argv[2] || 'https://everettwebsite.vercel.app/'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
const resp = await page.goto(URL, { waitUntil: 'networkidle', timeout: 45000 })
console.log('status', resp?.status(), 'url', page.url())
await page.waitForTimeout(2500)
await page.screenshot({ path: 'scripts/shots/prod-hero.png' })
const title = await page.title()
console.log('title:', title)
const bodyText = (await page.evaluate(() => document.body.innerText)).slice(0, 120)
console.log('body head:', JSON.stringify(bodyText))
await browser.close()
