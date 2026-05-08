const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.blinkMsg = page.locator(".blink_me");
        this.usernameInput = page.getByPlaceholder("email@example.com");
        this.passwordInput = page.getByPlaceholder("enter your passsword");
        this.loginButton = page.getByRole("button", { name: "Login" });
        this.registerLink = page.getByRole("link", { name: "Register" });
        this.forgotPasswordLink = page.getByRole("link", { name: "Forgot password?" });
        this.invalidLoginMsg = page.locator(".toast-bottom-right");
        this.signOutBtn = page.getByRole("button", {name: "Sign Out"});
    }

    async signOutUser() {
        await this.signOutBtn.click();
    }

    async verifyUIControlsOnLogin() {
        await expect(this.blinkMsg).toBeVisible();
        await expect(this.usernameInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.loginButton).toBeVisible();
        await expect(this.forgotPasswordLink).toBeVisible();
        await expect(this.registerLink).toBeVisible();
    }

    /**
     * Verify the text content of login page controls
     */
    async verifyTextOnLoginControls() {
        await expect(this.blinkMsg).toHaveText("Register to sign in with your personal account");
        await expect(this.forgotPasswordLink).toHaveText("Forgot password?");
    }

    /**
     * Perform login with provided credentials
     * @param {string} username - User email
     * @param {string} password - User password
     */
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        // Wait for navigation or error message
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Verify invalid login error message is displayed
     */
    async verifyInvalidLogin() {
        await expect(this.invalidLoginMsg).toBeVisible();
        await expect(this.invalidLoginMsg).toContainText("Incorrect email or password.");
    }

    /**
     * Check if login page is currently displayed
     * @returns {Promise<boolean>} True if on login page
     */
    async isLoginPageDisplayed() {
        return await this.usernameInput.isVisible();
    }

    async clearLoginForm() {
        await this.usernameInput.clear();
        await this.passwordInput.clear();
    }
}

module.exports = { LoginPage };