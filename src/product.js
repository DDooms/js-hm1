const ProductsEnum = require('./productsEnum');

class Product {
    constructor(name) {
        if (!ProductsEnum[name]) {
            throw new Error(`Invalid product name: ${name}`);
        }
        this.name = name;
    }

    // Getter for name
    getName() {
        return this.name;
    }

    // Setter for name
    setName(name) {
        if (!ProductsEnum[name]) {
            throw new Error(`Invalid product name: ${name}`);
        }
        this.name = name;
    }
}

module.exports = Product;
