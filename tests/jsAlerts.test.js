const { test } = require('@playwright/test');
const { JsAlertsPage } = require('../pages/jsAlertsPage');

test('Handle JS Alert', async ({ page }) => {
  const alert = new JsAlertsPage(page);
  await alert.goto();
  await alert.handleAlert();
});
