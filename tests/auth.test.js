const { test } = require('@playwright/test');
const { AuthPage } = require('../pages/authPage');

test.describe('Form Authentication', () => {
  test('Valid Login', async ({ page }) => {
    const auth = new AuthPage(page);
    await auth.goto();
    await auth.login('tomsmith', 'SuperSecretPassword!');
    await auth.assertSuccess();
  });

  test('Invalid Login', async ({ page }) => {
    const auth = new AuthPage(page);
    await auth.goto();
    await auth.login('wrong', 'wrong');
    await auth.assertFailure();
  });
});
