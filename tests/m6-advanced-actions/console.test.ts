import test, { expect } from '@playwright/test';

test('Check console', async ({ page }) => {
  page.on('console', (msg) => {
    console.log(msg);
    expect.soft(msg.type()).not.toEqual('error');
  });

  page.on('pageerror', (error) => {
    console.log(`Found an error: ${error.name}, ${error.message}`);
    expect.soft(error.name).not.toEqual('Error');
  }); // must be registered first
  page.goto('/');

  await page.getByRole('button', { name: 'Register' }).click();

  page.on('dialog', (dialog) => dialog.accept());

  // can monitor for errors
  // NOTE: there's suppose to be 4 message, but there's 3. pageerror is from a different handler
});
