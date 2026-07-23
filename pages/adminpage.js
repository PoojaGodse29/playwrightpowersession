
class AdminPage {
    constructor(page) {
        this.page = page;
        this.menubutton = page.locator('[data-test="nav-menu"]')
        this.ordersbutton = page.locator('[data-test="nav-admin-orders"]');
        this.usersbutton = page.locator('[data-test="nav-admin-users"]');
        this.adduserbutton = page.locator('[data-test="user-add"]');
        this.firstname = page.locator('[data-test="first-name"]');
        this.lastname = page.locator('[data-test="last-name"]');
        
        
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
    }

}
module.exports = { AdminPage };



