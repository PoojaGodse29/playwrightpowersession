
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
        this.sheetsander = page.getByText('Sheet Sander', { exact: true });
        this.beltsander = page.getByText('Belt Sander', { exact: true });
        this.addtocompareButton = page.locator('[data-test="add-to-compare"]');
        this.comparenow = page.locator('[data-test="compare-link"]');
        
       
       
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

    async compareproducts() {
        await this.categoriesButton.press('Enter');
        await this.powerToolsButton.press('Enter');
        await this.sheetsander.click();
        await this.addtocompareButton.click();
        await this.page.goto('https://practicesoftwaretesting.com/category/power-tools');
        await this.beltsander.click();
        await this.addtocompareButton.click();
        await this.comparenow.click();
    }
}


        
module.exports = { CartPage };



