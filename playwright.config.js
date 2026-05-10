const path = require('path');
const dotenv = require('dotenv');
const { defineConfig, devices } = require('@playwright/test');

const envName = process.env.ENV ? `.env.${process.env.ENV}` : '.env';
const envPath = path.resolve(__dirname, envName);
dotenv.config({ path: envPath });

/**
 * @see https://playwright.dev/docs/test-configuration
 */

module.exports = defineConfig({
  testDir: './tests',
  workers: 1,
  reporter: 'html',
  
  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    ignoreHTTPSErrors: true,
    headless: true,
  },

  projects: [
    {
      name: 'dev',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: process.env.BASE_URL,
      }
    },
    // {
    //   name: 'staging',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     baseURL: process.env.STAGE_URL
    //   }
    // },

    // {
    //   name: 'production',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     baseURL: process.env.PROD_URL
    //   }
    // },
  ],
});