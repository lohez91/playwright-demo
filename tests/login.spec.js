const { test, expect } = require('@playwright/test');

test('Login Test', async ({ page }) => {

    // Open website
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Wait for page load
    await page.waitForTimeout(3000);

    // Enter username
    await page.locator('input[name="username"]').fill('Admin');

    // Enter password
    await page.locator('input[name="password"]').fill('admin123');

    // Click login button
    await page.locator('button[type="submit"]').click();

    // Verify dashboard appears
    await expect(page).toHaveURL(/dashboard/);

});