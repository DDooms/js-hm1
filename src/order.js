const ProductsEnum = require('./productsEnum');
const Product = require('./product');

class Order {
    static nextId = 1;
    constructor(productList) {
        this.orderId = Order.nextId++;
        this.productList = productList.map((productName) => new Product(productName));
    }

    getOrderId() {
        return this.orderId;
    }

    getProductList() {
        return this.productList;
    }

    setProductList(productList) {
        this.productList = productList.map((productName) => new Product(productName));
    }
}

module.exports = Order;
