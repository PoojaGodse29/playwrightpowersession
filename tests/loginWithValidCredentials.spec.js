// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://practicesoftwaretesting.com/auth/login');
//   await page.getByPlaceholder('Your email').fill('admin@practicesoftwaretesting.com', {delay: 100});
//   await page.getByPlaceholder('Your password').fill('welcome01', {delay: 100});
//     // await page.locator('[data-test="login-submit"]').click();
//     await page.getByLabel('Login').nth(1).click();
//   await expect(page).toHaveURL('https://practicesoftwaretesting.com/admin/dashboard');

//   await page.context().storageState({ path: 'playwright/.auth/user.json' });
//   console.log('Login successful, storage state saved to playwright/.auth/user.json');
// })

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage');


test('Valid Login', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/auth/login');
    const loginPage = new LoginPage(page);

    await loginPage.login(
        'admin@practicesoftwaretesting.com',
        'welcome01'
    );

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/admin/dashboard');
});