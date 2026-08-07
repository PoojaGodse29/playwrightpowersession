
const { test , expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage');
const testData = require('../test-data/project-data');

test('Verify that user authentication is saved', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/auth/login');

    const loginPage = new LoginPage(page);

    await loginPage.login(
        testData.admincredentials.adminusername,
        testData.admincredentials.adminpassword
    );
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/admin/dashboard');

    // Save authenticated state
    await page.context().storageState({
        path: 'playwright/.auth/admin.json'
    });
});