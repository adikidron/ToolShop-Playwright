import { expect } from '@playwright/test';
import type { Page, Locator } from '@playwright/test';

export class LoginPage {

  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('[data-test="email"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-submit"]');
    }

    async open(){
        await this.page.goto('auth/login');
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    async customerLoginValidation() {
        await expect(this.page).toHaveURL('account');
    }
    async adminLoginValidation() {
        await expect(this.page).toHaveURL('admin/dashboard');
    }
}
