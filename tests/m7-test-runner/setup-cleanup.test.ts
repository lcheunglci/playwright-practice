import test, { expect } from '@playwright/test';

test.beforeAll('Meaningful description', async () => {
  console.log('Before All setup');
});

test.beforeEach('Meaningful description', async ({ page }) => {
  console.log('Before each setup');
  page.goto('');
});

test('Test 1', async ({ page }) => {
  console.log('Test 1');
  await expect(page.getByRole('button')).toHaveCount(3);
});

test('Test 2', async ({ page }) => {
  console.log('Test 2');
  await expect(page.getByRole('checkbox')).toHaveCount(1);
});

test.afterEach('Meaningful description', async ({ page }) => {
  console.log('After each cleanup');
  page.goto('');
});

test.afterAll('Meaningful description', async () => {
  console.log('After all cleanup');
});

// run this test sequentially
// npx playwright test .\tests\m7-test-runner\setup-cleanup.test.ts --workers 1

// before all will be call twice workers are isolated processes global setup and cleanup cannot be shared
// npx playwright test .\tests\m7-test-runner\setup-cleanup.test.ts
