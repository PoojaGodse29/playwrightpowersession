class LoginPage {
    constructor(page) {
        this.page = page;

        this.email = page.getByPlaceholder('Your email');
        this.password = page.getByPlaceholder('Your password');
        this.loginButton = page.getByLabel('Login').nth(1);
        
    }

    async login(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}

module.exports = { LoginPage };