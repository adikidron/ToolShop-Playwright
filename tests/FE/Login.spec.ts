import { test } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';


test.describe('Login Tests', () => {

    test('Customer Login Test', async ({ page }) => {

        const loginPage = new LoginPage(page);
        await loginPage.open();

        await loginPage.login(process.env.CUSTOMER_EMAIL!, process.env.CUSTOMER_PASSWORD!);
        await loginPage.customerLoginValidation();
    });

    test('Admin Login Test', async ({ page }) => {

        const loginPage = new LoginPage(page);
        await loginPage.open();

        await loginPage.login(process.env.ADMIN_EMAIL!, process.env.ADMIN_PASSWORD!);
        await loginPage.adminLoginValidation();
    });
});