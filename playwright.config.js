// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({

  testDir: './tests',
  workers: 1,
  //retries: 1,

  reporter: 'html',
  
  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    // video: 'retain-on-failure',
    ignoreHTTPSErrors: true,
    headless: true,
    
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'dev',
      use: {         
        ...devices['Desktop Chrome'],
        baseURL: 'https://rahulshettyacademy.com',
        
      }
    },
    {
      name: 'staging',
      use: { 
        ...devices['Desktop Chrome'],
        baseURL: 'https://staging.example.com' 
      }
    },
    {
      name: 'production',
      use: { 
        ...devices['Desktop Chrome'],
        baseURL: 'https://example.com' 
      }
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

