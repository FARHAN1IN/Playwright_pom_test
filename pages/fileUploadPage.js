const { expect } = require('@playwright/test');

exports.FileUploadPage = class FileUploadPage {
  constructor(page) {
    this.page = page;
    this.uploadInput = page.locator('#file-upload');
    this.uploadBtn = page.locator('#file-submit');
    this.uploadedFiles = page.locator('#uploaded-files');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/upload');
  }

  async uploadFile(filePath) {
    await this.uploadInput.setInputFiles(filePath);
    await this.uploadBtn.click();
    await this.page.waitForSelector('#uploaded-files');
    await expect(this.uploadedFiles).toContainText('testfile.txt');
  }
};
