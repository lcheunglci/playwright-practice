import test from '@playwright/test';

test.describe.skip('Feature A Group', () => {
  // Note: this does not mean it runs in the same order
  test('Test A.1', async ({ page }) => {
    await page.goto('/');
    console.log('Test A.1');
  });

  test('Test A.2', async ({ page }) => {
    await page.goto('/');
    console.log('Test A.2');
  });
});

test.describe('Feature B Group', () => {
  test.skip(({ browserName }) => browserName === 'chromium');

  // this is the wrong way to add conditional skip
  // test.skip(
  //   browserName === 'chromium',
  //   'Does not work on Chromium, ticket ABC-123',
  // );

  test('Test B.1', async ({ page }) => {
    await page.goto('/');
    console.log('Test B.1');
  });

  test('Test B.2', async ({ page }) => {
    await page.goto('/');
    console.log('Test B.2');
  });
});
