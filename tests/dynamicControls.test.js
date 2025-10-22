const { test } = require('@playwright/test');
const { DynamicControlsPage } = require('../pages/dynamicControlsPage');

test('Enable Textbox', async ({ page }) => {
  const dc = new DynamicControlsPage(page);
  await dc.goto();
  await dc.enableTextbox();
});
