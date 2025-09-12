import test, { expect } from '@playwright/test';

const name = 'Sofia';

test('Storage - test from the UI perspective', async ({ page }) => {
  await page.goto('/');

  const input = page.getByLabel('First name');
  await input.fill(name);
  await page.reload();
  await expect(input).toHaveValue('');

  input.fill(name);
  await page.getByRole('button', { name: 'Save Input' }).click();
  await page.reload();
  await expect(input).toHaveValue(name);
});

test('Local Storage', async ({ page }) => {
  await page.goto('/');
  page.getByLabel('First name').fill(name);
  await page.getByRole('button', { name: 'Save Input' }).click();

  const storage = await page.context().storageState();

  console.log(storage.cookies);
  console.log(storage.origins[0].localStorage); // no way to set or clear the state?
});
