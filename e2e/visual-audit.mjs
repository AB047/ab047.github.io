import { chromium } from 'playwright'

const browser = await chromium.launch()

async function scrollThrough(page) {
  const height = await page.evaluate(() => document.body.scrollHeight)
  const viewport = 900
  for (let y = 0; y < height; y += viewport) {
    await page.evaluate((y) => window.scrollTo(0, y), y)
    await page.waitForTimeout(400)
  }
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(300)
}

for (const theme of ['light', 'dark']) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' })
  await page.waitForTimeout(2000) // let mount-timed hero animation settle

  if (theme === 'dark') {
    await page.getByLabel('theme toggler').click()
    await page.waitForTimeout(300)
  }

  await scrollThrough(page)
  await page.screenshot({ path: `/tmp/audit-${theme}-full.png`, fullPage: true })
  await page.close()
}

await browser.close()
console.log('done')
