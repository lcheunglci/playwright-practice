import test from '@playwright/test';

test('Fill test', async ({ page }) => {
  await page.goto('/');

  // avoid this and is discouraged - docs/api/class-elementhandle
  await page.check('#heard-about');

  await page.fill('#textarea', 'So I was thinking the other day...'); // Promise<void>

  // using locators does JIT fetching and evaluating where as using the element handle does not
});
