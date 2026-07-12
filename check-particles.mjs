import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push('console.error: ' + msg.text());
});

await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);

const canvasCount = await page.evaluate(() => document.querySelectorAll('#particles-js canvas').length);
const hasParticlesFn = await page.evaluate(() => typeof window.particlesJS === 'function');
const pJSDomLen = await page.evaluate(() => (window.pJSDom || []).length);

console.log('canvas inside #particles-js:', canvasCount);
console.log('window.particlesJS defined:', hasParticlesFn);
console.log('pJSDom instances:', pJSDomLen);
console.log('errors:', errors.length ? errors : 'none');

await browser.close();
