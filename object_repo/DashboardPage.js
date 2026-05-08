const { expect } = require('@playwright/test');

class DashboardPage {
    constructor(page) {
        this.page = page;
        this.productCards = page.locator(".card-body");
        this.searchBox = page.locator("input[placeholder='search']").last();
        this.searchResultText = page.locator(".text-muted").first();

        this.successMsg = page.locator(".toast-bottom-right");

        this.cartBtn = page.locator("[routerlink='/dashboard/cart']");
        this.cartProductList = page.locator(".cartWrap");
        this.checkputBtn = page.getByRole("button", {name: "Checkout"});

        this.selectCountryInput = page.getByPlaceholder("Select Country");
        this.countryOption = page.locator(".ta-results");
        this.placeOrderBtn = page.locator(".action__submit");
        this.thankYouMSG = page.locator(".hero-primary");
        this.orderNumber = page.locator("label.ng-star-inserted");

    }

    async orderConfirmation (msg) {
        let greetMsg;
        let orderID;
        greetMsg = await this.thankYouMSG.textContent();
        orderID = await this.orderNumber.textContent();
        return {greetMsg, orderID}
    }

    async selectPlaceOrder() {
        await this.placeOrderBtn.click();
    }

    async enterCountryNamePartially (countryName) {
        let partialtext = "";
        for(let i = 0; i<=2; i++) {
            partialtext += countryName[i];
        }
        await this.selectCountryInput.pressSequentially(partialtext, {delay:100});
    }

    async selectCountry (countryName) {
        await this.countryOption.filter("button", {name: countryName}).click();
    }

    async isDashboardDisplayed() {
        await this.productCards.first().waitFor({ state: 'visible' });
        await expect(this.productCards.first()).toBeVisible();
    }

    /**
    * Search for products and return results data
    * @param {string} productName - Search term
    * @returns {Promise<Object>} Search results
    */
    async searchProductAndGetCount(productName) {
    await this.searchBox.fill(productName);
    await this.searchBox.press('Enter');
    await this.page.waitForTimeout(1000);
    
    const resultMessage = await this.searchResultText.textContent();
    const count = parseInt(resultMessage.split(" ")[1]) || 0;
    const cardCount = await this.productCards.count();
    const productVisible = cardCount > 0;
    return {count,productVisible,resultMessage,cardCount};
    }

    /**
     * @param {String} itemsToAdd
     */
    async addProductToCart(itemToAdd) {
        //await this.isDashboardDisplayed();
        
        await this.productCards.filter({hasText: itemToAdd}).getByRole("button",{name: "Add to cart"}).click(); 
        await this.page.waitForTimeout(2000);
        await this.successMsg.waitFor({ state: 'visible' });
        const successMsg = await this.successMsg.textContent();
        return successMsg;
    }

    async selectCartBtn() {
        await this.cartBtn.click();
    }

    async isCartPageDisplayed(itemToAdd) {
        await this.cartProductList.first().waitFor({state: 'visible'});
        await expect(this.cartProductList.filter({hasText: itemToAdd})).toBeVisible();    
    }

    async isAddedProductFound(itemToAdd) {
        let addedProductName = await this.cartProductListfilter({ hasText: itemToAdd });
        return addedProductName;
    }

    async select_CheckoutBtn() {
        await this.checkputBtn.click();

    }

}


module.exports = { DashboardPage };