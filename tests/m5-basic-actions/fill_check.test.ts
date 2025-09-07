import test from '@playwright/test';

test('Fill test', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('First name').fill('Andrejs');

  // await page.getByLabel('Date of birth').fill('10-10-2025'); // bad value
  await page.getByLabel('Date of birth').fill('2025-10-10'); // good value
});

test('Click demo', async ({ page }) => {
  await page.goto('/');

  const btn = await page.getByRole('button', { name: 'Register' });

  await btn.click();
  await btn.click();
  await btn.click();

  // ...

  for (let i = 0; i < 5; i++) {
    await btn.click();
  }

  // most clean

  await btn.click({ clickCount: 5 });

  await btn.click({ button: 'right' }); // modifier using alt, ctrl...

  // double click
  await btn.dblclick();
});
