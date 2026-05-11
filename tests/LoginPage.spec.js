
const { test, expect } = require('@playwright/test');
const { PO_Manager } = require('../object_repo/PO_Manager');
const { loadTestData } = require('../test_data/loadTestData');
const testData = loadTestData('DashboardTestData');

test.describe('Login Page Tests', () => {
    let logger, poManager, loginPage, dashboardPage;

    test.beforeEach(async ({ page }) => {
        poManager = new PO_Manager(page);
        //logger = poManager.getLogger();
        loginPage = poManager.getLoginPage();
        dashboardPage = poManager.getDashboardPage();
        await page.goto("/client/#/auth/login");
    });

    test.afterEach(async ({ page }) => {
        //await loginPage.signOutUser();
    });    

    test.describe('UI Validation - Positive Scenarios', () => {
        test('@UI Should display all login page controls correctly', async ({ page }) => {
            await loginPage.verifyUIControlsOnLogin();
            await loginPage.verifyTextOnLoginControls();
        });
    });

    test.describe('Authentication - Functional Tests', () => {
        testData.validLoginData.forEach(data => {
            test(`@Functional Should successfully login with valid credentials - ${data.userName}`, async ({ page }) => {
                await loginPage.login(data.userName, data.password);
                await dashboardPage.isDashboardDisplayed();
                // Verify we're no longer on login page
                expect(await loginPage.isLoginPageDisplayed()).toBe(false);
            });            
        });
    });

        testData.inValidLoginData.forEach(data => {
            test(`@Functional Should reject login with invalid credentials - ${data.userName}`, async ({ page }) => {
                await loginPage.login(data.userName, data.password);
                await loginPage.verifyInvalidLogin();
                // Verify we're still on login page
                expect(await loginPage.isLoginPageDisplayed()).toBe(true);
            });
        });

/**        
    test.describe('Edge Cases', () => {
        test('@Functional Should handle empty credentials', async ({ page }) => {
            await loginPage.login("", "");
            await loginPage.verifyInvalidLogin();
        });

        test('@Functional Should handle only username provided', async ({ page }) => {
            await loginPage.login("test@example.com", "");
            await loginPage.verifyInvalidLogin();
        });

        test('@Functional Should handle only password provided', async ({ page }) => {
            await loginPage.clearLoginForm();
            await loginPage.passwordInput.fill("password123");
            await loginPage.loginButton.click();
            await loginPage.verifyInvalidLogin();
        });
    });
*/

});
