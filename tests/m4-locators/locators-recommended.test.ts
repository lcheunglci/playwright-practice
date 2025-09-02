import test from '@playwright/test';

test('Recommended built-in locators example', async ({ page }) => {
  await page.goto('');

  const firstName = page.getByLabel('First name');
  await firstName.fill('Sofia');
  await firstName.clear();

  await page.getByLabel('First name').fill('Andrejs');
});
