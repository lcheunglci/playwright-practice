import test, { expect } from '@playwright/test';
import { existsSync, statSync } from 'fs';

test('Download a Single file and assert', async ({ page }) => {
  await page.goto('/savings.html');

  const downloadPromise = page.waitForEvent('download');

  await page.getByText('Download Our Offer').click();

  const download = await downloadPromise;
  // note if the file was a zip file it will pass but if it's a pdf file and it can be previewed it will not work and timeout
  // for previewable files, it can only be downloaded in headless mode, but non-previewable files can be downloaded in both headed and headless

  const suggestedFileName = download.suggestedFilename();
  const filePath = 'download/' + suggestedFileName;
  await download.saveAs(filePath);

  expect(await download.failure()).toBeNull();

  expect(existsSync(filePath)).toBeTruthy();

  const fileSizeInBytes = statSync(filePath).size;
  console.log(fileSizeInBytes);
  expect(fileSizeInBytes).toBeLessThan(20_000);
});
