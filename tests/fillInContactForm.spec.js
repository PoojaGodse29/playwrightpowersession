// import { test, expect } from '@playwright/test';

// test('Verify that user can fill in the contact form', async ({ page }) => {
//   await page.goto('https://practicesoftwaretesting.com/admin/dashboard');
//   await page.locator('[data-test="nav-contact"]').click();
//   await page.getByPlaceholder('Your first name *').fill('Pooja');
//   await page.getByPlaceholder('Your last name *').fill('Godse');
//   await page.getByPlaceholder('Your email *').fill('pooja.godse@example.com');
//   await page.locator('[data-test="subject"]').selectOption('return');
//   await page.locator('[data-test="message"]').click();
//   await page.locator('[data-test="message"]').fill('Hi I want to return as the size doesnt fit me. It is a bit tight on my arms and legs. Hence would be great if I get the refund back');
//   await page.locator('[data-test="contact-submit"]').click();
//   await expect(page.getByText('Thanks for your message! We')).toBeVisible();

// })