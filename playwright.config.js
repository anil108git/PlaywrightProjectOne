require('dotenv').config();
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */

export default defineConfig({
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
        baseURL:
          process.env.BASE_URL,
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