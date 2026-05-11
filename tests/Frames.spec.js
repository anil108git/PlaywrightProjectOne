const {test, expect} = require('@playwright/test');

test('popup validation', async({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const confirmBtn = page.getByRole('button', {name: 'Confirm'});
    page.on('dialog', async dialog=> {
        console.log(dialog.message());
        await dialog.accept();        
    });
    await confirmBtn.click();
});

test('hover action in Playwright', async({browser})=> {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const hoverBtn = page.getByRole('button', {name: 'Mouse Hover'});
    await hoverBtn.scrollIntoViewIfNeeded();
    await hoverBtn.hover();
    const selectHoverBtnOption = page.locator('.mouse-hover-content a', {hasText: 'Top'});
    await selectHoverBtnOption.click();
    await page.pause();
});

test('Handelling frames in Playwright', async({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const framename = page.locator("[name='iframe-name']");
    page.frameLocator(framename);
});