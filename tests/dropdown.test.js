const { test } = require('@playwright/test');
const { DropdownPage } = require('../pages/dropdownPage');

test('Select Dropdown Option', async ({ page }) => {
  const dd = new DropdownPage(page);
  await dd.goto();
  await dd.selectOption('2');
});
