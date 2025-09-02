import test, { expect } from '@playwright/test';

test('Recommended built-in locators example', async ({ page }) => {
  await page.goto('');

  const firstName = page.getByLabel('First name');
  await firstName.fill('Sofia');
  await firstName.clear();

  await page.getByLabel('First name').fill('Andrejs');

  // click a button
  await page.getByRole('button', { name: 'Register', exact: true }).click();

  const warning = await page.getByText('Valid last name is required');

  await expect(warning).toBeVisible();
});
