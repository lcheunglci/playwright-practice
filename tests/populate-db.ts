import { test as setup } from '@playwright/test';

setup.use({});

setup('do populate db', async ({ page }) => {
  console.log('Populate Database');
});
