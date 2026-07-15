import { test, expect } from '@playwright/test'

test.describe('homepage', () => {
  test('loads with no console/page errors and every section renders', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text())
    })

    await page.goto('/', { waitUntil: 'networkidle' })

    await expect(page.getByRole('heading', { level: 1 })).toContainText('Atul Bharadwaj')
    await expect(page.locator('#aboutme')).toBeVisible()
    await expect(page.locator('#experience')).toContainText('Panasonic Avionics')
    await expect(page.locator('#techStack')).toBeVisible()
    await expect(page.locator('#projects')).toBeVisible()
    await expect(page.locator('#certifications')).toBeVisible()

    expect(errors, `console/page errors:\n${errors.join('\n')}`).toEqual([])
  })

  test('every project card has a title and no broken image', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })
    const cards = page.locator('.project-card')
    const count = await cards.count()
    expect(count).toBeGreaterThanOrEqual(8)

    // Next/Image lazy-loads by default, so scroll each into view before checking.
    const images = page.locator('#projects img')
    const imgCount = await images.count()
    for (let i = 0; i < imgCount; i++) {
      const img = images.nth(i)
      await img.scrollIntoViewIfNeeded()
      await expect.poll(() => img.evaluate((el: HTMLImageElement) => el.naturalWidth)).toBeGreaterThan(0)
    }
  })

  test('dark mode toggle switches the theme', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })
    const html = page.locator('html')
    const before = await html.getAttribute('class')

    await page.getByLabel('theme toggler').click()
    await page.waitForTimeout(300)

    const after = await html.getAttribute('class')
    expect(after).not.toEqual(before)
  })
})

test.describe('contact page', () => {
  test('loads and the form is usable', async ({ page }) => {
    await page.goto('/contact', { waitUntil: 'networkidle' })
    await expect(page.getByLabel('Your Name')).toBeVisible()
    await expect(page.getByLabel('Your Email')).toBeVisible()
    await expect(page.getByRole('button', { name: /submit/i })).toBeVisible()
  })
})
