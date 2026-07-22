
class AdminPage {
    constructor(page) {
        this.page = page;
        this.menubutton = page.locator('[data-test="nav-menu"]')
        this.ordersbutton = page.getByRole('button', { name: 'Orders' })

    }

    async adminorders() {
 
        await this.menubutton.click();
        await this.ordersbutton.click();

    }


}
        
module.exports = { AdminPage };



