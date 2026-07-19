
const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage');

test('Authenticate user', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/auth/login');

    const loginPage = new LoginPage(page);

    await loginPage.login(
        'admin@practicesoftwaretesting.com',
        'welcome01'
    );

    // Save authenticated state
    await page.context().storageState({
        path: 'playwright/.auth/user.json'
    });
});