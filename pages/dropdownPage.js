const { expect } = require('@playwright/test');

exports.DropdownPage = class DropdownPage {
  constructor(page) {
    this.page = page;
    this.dropdown = page.locator('#dropdown');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/dropdown');
  }

  async selectOption(value) {
    await this.dropdown.selectOption(value);
    await expect(this.dropdown).toHaveValue(value);
  }
};
