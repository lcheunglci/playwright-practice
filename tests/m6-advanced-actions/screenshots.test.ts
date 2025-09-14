import test, { expect } from '@playwright/test';

test('Screenshot demo', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Register' }).click();

  const s: Promise<Buffer> = page.screenshot({
    path: 'screenshot/screenshot.png',
  });

  page.screenshot({
    path: 'screenshots/screenshot-advanced.png',
    fullPage: true, // full page
    mask: await page.getByTestId('location').all(), // hide all elements that match the locator
  });

  // can also tweak the screenshot to be taken only on failure from the playwright.config.ts

  await expect(page.locator('.invalid-feedback')).toHaveCount(4); // the correct count is 3.
});
