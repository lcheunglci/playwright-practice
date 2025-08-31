import test, { chromium } from '@playwright/test';

test('Test with Page fixture', async ({ page }) => {
  // console.log('Running: ', chromium);

  // const browser = await chromium.launch();
  // const page = await browser.newPage();

  await page.goto('https://playwright.dev/');
  console.log('Text content: ', await page.title());

  // await page.close();
  // await browser.close();
});

test('Other fixtures', async ({ browserName, browser, context, page }) => {
  const page1 = await context.newPage();
  const page2 = await context.newPage();
});
