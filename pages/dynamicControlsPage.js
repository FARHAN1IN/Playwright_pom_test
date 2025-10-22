const { expect } = require('@playwright/test');

exports.DynamicControlsPage = class DynamicControlsPage {
  constructor(page) {
    this.page = page;
    this.enableButton = page.locator('button', { hasText: 'Enable' });
    this.textBox = page.locator('#input-example input');
    this.message = page.locator('#message');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/dynamic_controls');
  }

  async enableTextbox() {
    await this.enableButton.click();
    await expect(this.message).toContainText("It's enabled!");
    await expect(this.textBox).toBeEnabled();
  }
};
