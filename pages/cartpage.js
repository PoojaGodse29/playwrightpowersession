
class CartPage {
    constructor(page) {
        this.page = page;
        this.increaseQuantityButton = page.locator('[data-test="increase-quantity"]');
        this.addToCartButton = page.locator('[data-test="add-to-cart"]');
        this.goToCartButton = page.locator('[data-test="nav-cart"]');
        this.categoriesButton = page.locator('[data-test="nav-categories"]');
        this.handToolsButton = page.locator('[data-test="nav-hand-tools"]');
        this.pliersimage = page.getByAltText('Pliers', { exact: true });
        this.removeFromCartButton = page.locator('.btn.btn-danger');
        this.powerToolsButton = page.locator('[data-test="nav-power-tools"]');
        this.circularsaw = page.getByText('Circular Saw', { exact: true });
        this.decreasequantityButton = page.locator('[data-test="decrease-quantity"]');
       
       
    }

    async addtocart() {
 
        await this.categoriesButton.press('Enter');
        await this.handToolsButton.press('Enter');
        await this.pliersimage.click();
        await this.increaseQuantityButton.click();
        await this.addToCartButton.click();
        await this.goToCartButton.click();
    }

      async removefromcart() {
        await this .goToCartButton.click();
        await this.removeFromCartButton.click();
    }

    async increasequantity() {
        await this.categoriesButton.press('Enter');
        await this.powerToolsButton.press('Enter');
        await this.circularsaw.click();
        await this.increaseQuantityButton.click();
}

    async decreasequantity() {
        await this.decreasequantityButton.click();
    }
}
        
module.exports = { CartPage };



