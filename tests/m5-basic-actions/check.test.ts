import test, { expect } from '@playwright/test';

test('Check test', async ({ page }) => {
  await page.goto('');

  const checkbox = page.getByRole('checkbox');
  const textarea = page.locator('#textarea');
  const message = 'msg';

  await checkbox.check();

  await textarea.fill(message);

  // await expect(textarea).toContainText(message); // fails as the actual text was empty; // text located for located <div> actual </div>
  await expect(textarea).toHaveValue(message);
});
