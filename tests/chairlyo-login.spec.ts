import { test, expect } from '@playwright/test';

test('Navigate to Chairlyo Login', async ({ page }) => {
    // 1. Navigate to the login page
    await page.goto('https://stage.chairlyo.com/login');

    // 2. Fill credentials
    await page.locator('#email').fill('admin@chairlyo.com');
    await page.locator('[name="password"]').fill('adminpassword');
    
    // 3. Submit form
    await page.getByRole('button', { name: 'log in' }).click();

    // 4. Web-first assertion (Automatically waits for the alert and checks text)
    await expect(page.getByRole('alert')).toHaveText('Success Login successful!');
});
