const { test, expect } = require('@playwright/test');
const { url } = require('node:inspector');

// Get all the links of the menu items of this https://www.wikipedia.org/ and print it in the console and also valid the links:
test.describe('Group 1', () => {
    test('Find all Menu links and Validate it', async ({ page, request }) => {
        const baseURL = 'https://en.wikipedia.org';
        await page.goto(`${baseURL}/wiki/Main_Page`);

        await page.getByRole('button', { name: 'Main menu' }).click();
        const links = page.locator('.vector-main-menu a');
        const totalLinks = await links.count();
        console.log(`Total number of links: ${totalLinks}`);

        for (let i = 0; i < totalLinks; i++) {
            const linkText = await links.nth(i).textContent();
            const linkURL = await links.nth(i).getAttribute('href');
            // Skip empty links
            if (!linkURL) continue;
            let url;
            if (linkURL.startsWith('http')) {
                url = linkURL;
            } else if (linkURL.startsWith('//')) {
                url = `https:${linkURL}`;
            } else {
                url = `${baseURL}${linkURL}`;
            }

            const response = await request.get(url);
            const statusCode = response.status();
            if (statusCode < 400) {
                console.log(`Menu: ${linkText} | URL: ${url} | Status: VALID (${statusCode})`);
            } else {
                console.log(`Menu: ${linkText} | URL: ${url} | Status: BROKEN (${statusCode})`);
            }
            expect.soft(statusCode).toBeLessThan(400);
        }
    });

});

// How do you handle file uploads?
/*
test.describe('Group 2', ()=> {
    test('Should be able to upload file', async ({page}) => {
        page.goto('https://configurator.medocity.com/');
        const username = page.locator('#userName');
        await username.clear();
        await username.fill('sandeep_prov_admin');
        const pass = page.locator('#paswword');
        await pass.clear();
        await pass.fill('Strong@2022!');
        const signInBtn = page.getByRole('button', {name: 'Sign in'});
        await signInBtn.click();
        // wait to dashboard card to be loadded
        const dashboardCards = page.locator('.card-body');
        
        const clientName = 'IndiaQA_AshiBio';
        await dashboardCards.first().isVisible();
        await dashboardCards.filter({hasText: clientName}).click()

        const clientDetasilsPage = page.locator('.display-4');
        await clientDetasilsPage.waitFor();
        const name = clientDetasilsPage.textContent();

        const clientDetailsPageEdit = page.locator('.feather-edit-2');
        const saveClinetDetails = page.locator("[type='submit']");        
        const uplaodedImagePreview = page.locator('.selected-file');
        await clientDetailsPageEdit.click();

        const chooseFile = page.locator('input[type="file"]');
        await chooseFile.setInputFiles('/Users/ichi02/Downloads/close.png');
        await uplaodedImagePreview.waitFor();
        
        console.log('File uploade sucessfully...');
        await saveClinetDetails.scrollIntoViewIfNeeded();
        await saveClinetDetails.click();

    });
});
*/
test.describe('Group 3', () =>{
    test('Print all links of wiki Menu', async ({page}) => {
        await page.goto('https://en.wikipedia.org/wiki/Main_Page');
        const menuButton = page.getByRole('button', {name:'Main menu'});
        await menuButton.click();
        const menuItems = page.locator('.vector-main-menu a');
        let itemName = '';
        let URL = '';
        const count = await menuItems.count();
        console.log('Total Count of the Menu Items: '+count);
        for(let i = 0; i<count; i++) {
            itemName = await menuItems.nth(i).textContent();
            URL = await menuItems.nth(i).getAttribute('href');
            await expect(URL).toBeTruthy();
            console.log('Name of the Menu item: '+ itemName + ' URL of the Menu: '+ URL);
        }
    });
});

// How do you handle file uploads?  