const { test, expect } = require('@playwright/test');
const { FileUploadPage } = require('../pages/fileUploadPage');
const path = require('path');

test('Upload File Successfully', async ({ page }) => {
  const uploadPage = new FileUploadPage(page);
  const filePath = path.resolve('testData/testfile.txt'); // <-- Correct absolute path
  await uploadPage.goto();
  await uploadPage.uploadFile(filePath);
});
