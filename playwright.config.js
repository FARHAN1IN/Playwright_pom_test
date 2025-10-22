// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  reporter: [['list'], ['html', { outputFolder: 'html-report' }]],
  use: {
    browserName: 'chromium',
    headless: false,
    video: 'on',
    screenshot: 'only-on-failure',
  },
});
