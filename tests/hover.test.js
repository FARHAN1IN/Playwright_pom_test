const { test } = require('@playwright/test');
const { HoverPage } = require('../pages/hoverPage');

test('Hover on Image', async ({ page }) => {
  const hover = new HoverPage(page);
  await hover.goto();
  await hover.hoverOnImage();
});
