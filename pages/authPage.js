const { expect } = require('@playwright/test');

exports.AuthPage = class AuthPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('button[type="submit"]');
    this.flash = page.locator('#flash');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }

  async assertSuccess() {
    await expect(this.flash).toContainText('You logged into a secure area!');
  }

  async assertFailure() {
    await expect(this.flash).toContainText('Your username is invalid!');
  }
};
