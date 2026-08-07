
const { test , expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage');
const testData = require('../test-data/project-data');

test('Verify that user authentication is saved', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/auth/login');

    const loginPage = new LoginPage(page);

    await loginPage.login(
        testData.customercredentials.customerusername,
        testData.customercredentials.customerpassword
    );
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');

    // Save authenticated state
    await page.context().storageState({
        path: 'playwright/.auth/customer.json'
    });
});