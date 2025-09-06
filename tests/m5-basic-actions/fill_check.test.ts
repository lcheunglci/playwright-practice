import test from '@playwright/test';

test('Fill test', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('First name').fill('Andrejs');

  // await page.getByLabel('Date of birth').fill('10-10-2025'); // bad value
  await page.getByLabel('Date of birth').fill('2025-10-10'); // good value
});
