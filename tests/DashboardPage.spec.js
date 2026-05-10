const {test, expect} = require('@playwright/test');
const {PO_Manager} = require('../object_repo/PO_Manager');
const { loadTestData } = require('../test_data/loadTestData');
const testData = loadTestData('DashboardTestData');

test.describe('Dashboard Page Tests', () => {
    let poManager, loginPage, dashboardPage, cartPage;
    
    test.beforeEach(async ({page}) => {
        poManager = new PO_Manager(page);
        loginPage = poManager.getLoginPage();
        dashboardPage = poManager.getDashboardPage();
        cartPage = poManager.getCartPage();

        await page.goto("/client/#/dashboard/dash");
        await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
        await dashboardPage.isDashboardDisplayed();
    });

    test.afterEach(async ({ page }) => {
        //await loginPage.signOutUser();
    });

    test.describe('Search Functionality - Positive Cases', () => {
        testData.validSearchTerms.forEach(data => {
            test(`Should display products for "${data.term}"`, async () => {
                const result = await dashboardPage.searchProductAndGetCount(data.term);
                expect(result.count).toBeGreaterThan(0);
                expect(result.productVisible).toBe(true);
            });
        });
    });

    test.describe('Search Functionality - Negative Cases', () => {
        testData.invalidSearchTerms.forEach(data => {
            test(`Should display no products for "${data.term}"`, async ({ page }) => {
                const result = await dashboardPage.searchProductAndGetCount(data.term);
                expect(result.count).toBe(0);
                expect(result.productVisible).toBe(false);
                expect(result.resultMessage).toContain("Showing 0 results");
            });
        });
    });
        
/*** 
    test.describe('Edge Case Tests', () => {
        test('Should handle empty search box', async({page}) => {
            await dashboardPage.searchBox.fill("");
            await dashboardPage.searchBox.press('Enter');
            await page.waitForTimeout(500);
            const cardCount = await dashboardPage.productCards.count();
            expect(cardCount).toBeGreaterThanOrEqual(0);
        });

        test('Should handle special characters in search', async({page}) => {
            const result = await dashboardPage.searchProductAndGetCount("@#$%");
            expect(result.count).toBe(0);
        });
    });
    */

    test.describe('Positive Test Cases', () => {
        test('Should be able to add product in cart', async ({page}) => {
            const result = await dashboardPage.addProductToCart(testData.product);            
            await expect(result).toContain("Product Added To Cart");
        });
    });

    test.describe('Cart Operations', () => {
        test('Should be able to view added product on cart page', async ({page}) => {
            await dashboardPage.addProductToCart(testData.product);            
            await dashboardPage.selectCartBtn();
            await dashboardPage.isCartPageDisplayed(testData.product);
        });

        test('Should be able to click on CheckOut Button', async ({page}) => {
            await dashboardPage.addProductToCart(testData.product);            
            await dashboardPage.selectCartBtn();
            await dashboardPage.isCartPageDisplayed(testData.product);
            await dashboardPage.select_CheckoutBtn();

        });

        test('Should be able to type & select country from the suggested drop-down', async ({page}) =>{
            await dashboardPage.addProductToCart(testData.product);            
            await dashboardPage.selectCartBtn();
            await dashboardPage.isCartPageDisplayed(testData.product);
            await dashboardPage.select_CheckoutBtn();
            await dashboardPage.enterCountryNamePartially(testData.countryName);
            await dashboardPage.selectCountry(testData.countryName);            
        });

        test('Should be able to place order successfully & get OrderID', async ({page}) => {
            await dashboardPage.addProductToCart(testData.product);            
            await dashboardPage.selectCartBtn();
            await dashboardPage.isCartPageDisplayed(testData.product);
            await dashboardPage.select_CheckoutBtn();
            await dashboardPage.enterCountryNamePartially(testData.countryName);
            await dashboardPage.selectCountry(testData.countryName);            
            await dashboardPage.selectPlaceOrder();
            const result = await dashboardPage.orderConfirmation();
            expect(result.greetMsg).toContain(testData.expectedGreetMsg);
            expect(result.orderID).toBeTruthy();
        });
    });

    

});
