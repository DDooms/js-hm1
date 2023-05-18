const ProductsEnum = require('./product');

class Order {
    static nextId = 1;

    constructor(productList) {
        this.orderId = Order.nextId++;
        this.productList = productList.map((productName) => {
            if (!ProductsEnum[productName]) {
                throw new Error(`Invalid product name: ${productName}`);
            }
            return productName;
        });
    }

    getOrderId() {
        return this.orderId;
    }

    getProductList() {
        return this.productList;
    }
}

module.exports = Order;
