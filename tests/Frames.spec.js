const {test, expect} = require('@playwright/test');
const { promises } = require('node:dns');

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

    const f1 = page.locator("[name='iframe-name']");
    f1.scrollIntoViewIfNeeded();
    const iframe1 = page.frameLocator("[name='iframe-name']");
    // Locate inside iframe
    const practice1 = iframe1.getByRole('link', { name: 'Practice' });
    await practice1.scrollIntoViewIfNeeded();
    await practice1.click();
    // Dropdown outside iframe
    const dropdown1 = page.locator('#dropdown-class-example');
    await dropdown1.selectOption('option1');
    
});

test('Handlling child windoes', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const linkblink = page.locator('.blinkingText');
    
    const [newPage1] = await Promise.all([
        context.waitForEvent('page'),
        linkblink.click(),
    ]);
    // Wait for page to load
    await newPage1.waitForLoadState();

    const newpageJob = newPage1.getByRole('link', { name: 'Jobs' });
    await newpageJob.click();

    const pageHome = page.getByRole('link', { name: 'Home' });
    await pageHome.click();
});