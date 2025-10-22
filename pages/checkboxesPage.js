const { expect } = require('@playwright/test');

exports.CheckboxesPage = class CheckboxesPage {
  constructor(page) {
    this.page = page;
    this.checkboxes = page.locator('#checkboxes input');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
  }

  async toggleCheckbox(index) {
    const box = this.checkboxes.nth(index);
    await box.click();
    await expect(box).toBeChecked();
  }
};
