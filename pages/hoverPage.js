const { expect } = require('@playwright/test');

exports.HoverPage = class HoverPage {
  constructor(page) {
    this.page = page;
    this.image = page.locator('.figure').first();
    this.caption = page.locator('.figcaption').first();
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/hovers');
  }

  async hoverOnImage() {
    await this.image.hover();
    await expect(this.caption).toBeVisible();
  }
};
