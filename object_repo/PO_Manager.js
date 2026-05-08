const {Logger} = require("../utils/Logger")
const {LoginPage} = require("./LoginPage");
const {DashboardPage} = require("./DashboardPage");
const {CartPage} = require("./CartPage");
// const {OrderPage} = require("./OrderPage");

class PO_Manager {

    constructor(page) {
        this.page = page;
        //this.logger = new Logger();
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.cartPage = new CartPage(this.page);


    }

    // getLogger() {
    //     return this.logger;
    // }

    getLoginPage() {
        return this.loginPage;
    }

    getDashboardPage() {
        return this.dashboardPage;
    }

    getCartPage() {
        return this.cartPage;
    }
}

module.exports = { PO_Manager };