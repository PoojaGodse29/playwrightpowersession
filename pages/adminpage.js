
class AdminPage {
    constructor(page) {
        this.page = page;
        this.menubutton = page.locator('[data-test="nav-menu"]')
        this.ordersbutton = page.locator('[data-test="nav-admin-orders"]');
        this.usersbutton = page.locator('[data-test="nav-admin-users"]');
        this.adduserbutton = page.locator('[data-test="user-add"]');
        this.firstname = page.locator('[data-test="first-name"]');
        this.lastname = page.locator('[data-test="last-name"]');
        this.street = page.locator('[data-test="street"]');
        this.city = page.locator('[data-test="city"]');
        this.country = page.locator('[data-test="country"]');
        this.email = page.locator('[data-test="email"]');
        this.dob = page.locator('[data-test="dob"]');
        this.country = page.locator('[data-test="country"]')
        this.savebutton = page.locator('[data-test="user-submit"]');
        this.postalcode = page.locator('[data-test="postal_code"]');
        this.state = page.locator('[data-test="state"]');
        this.phone = page.locator('[data-test="phone"]');
        this.password = page.locator('[data-test="password"]');

    }

    async adminorders() {
 
       await this.menubutton.press('Enter');
       await this.ordersbutton.press('Enter');
    }

    async adminusers() {
        await this.menubutton.press('Enter');
        await this.usersbutton.press('Enter');
        
    }

    async adduser() {
        await this.adduserbutton.click();
        await this.firstname.fill('Deepa');
        await this.lastname.fill('Sharma');
        await this.dob.fill('2000-01-02');
        await this.street.fill('123 Main St');
        await this.postalcode.fill('1403 BB')
        await this.city.fill('New York');
        await this.state.fill('MH')
        await this.country.selectOption('US');
        await this.phone.fill('47589596')
        await this.email.fill('deepa.sharma@example.com');
        await this.password.fill('W!nter_83#River*')
        await this.page.pause();
        await this.savebutton.click();
        await this.page.pause();

    }

}
module.exports = { AdminPage };



