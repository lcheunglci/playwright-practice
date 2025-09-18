import test, { expect } from '@playwright/test';

test.describe.configure({ mode: 'parallel' }); // serial to override the parallel setting in the config

test('Will not run 1', async () => {
  console.log('Test 1');
});

test('Will not run 2', async () => {
  console.log('Test 2');
});

test('Will not run 3', async () => {
  console.log('Test 3');
});

test('Will not run 4', async () => {
  console.log('Test 4');
});

test('Will not run 5', async () => {
  console.log('Test 5');
});

test('Will not run 6', async () => {
  console.log('Test 6');
});
