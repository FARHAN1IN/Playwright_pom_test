const { expect } = require('@playwright/test');

exports.JsAlertsPage = class JsAlertsPage {
  constructor(page) {
    this.page = page;
    this.jsAlert = page.locator('button', { hasText: 'Click for JS Alert' });
    this.result = page.locator('#result');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  }

  async handleAlert() {
    this.page.once('dialog', async (dialog) => {
      await dialog.accept();
    });
    await this.jsAlert.click();
    await expect(this.result).toContainText('You successfully clicked an alert');
  }
};
