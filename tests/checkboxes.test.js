const { test } = require('@playwright/test');
const { CheckboxesPage } = require('../pages/checkboxesPage');

test('Toggle Checkbox', async ({ page }) => {
  const cb = new CheckboxesPage(page);
  await cb.goto();
  await cb.toggleCheckbox(0);
});
