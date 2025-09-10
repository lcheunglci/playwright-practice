import test, { expect } from '@playwright/test';

const name = 'Sofia';

test('Dialog test - default handling is to dismiss', async ({ page }) => {
  await page.goto('/');

  const input = page.getByLabel('First name');
  await input.fill(name);
  await expect(input).toHaveValue(name);

  await page.getByRole('button', { name: 'Clear' }).click();
  await expect(input).toHaveValue(name);
});

test('Dialog test - OK or Dismiss', async ({ page }) => {
  // page.on('dialog', (dialog) => dialog.accept()); // dismiss is default
  page.once('dialog', (dialog) => dialog.accept()); // dismiss is default

  await page.goto('/');

  const input = page.getByLabel('First name');
  await input.fill(name);
  await expect(input).toHaveValue(name);

  await page.getByRole('button', { name: 'Clear' }).click();
  await expect(input).toHaveValue('');
});
