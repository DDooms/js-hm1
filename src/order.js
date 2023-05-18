class Order {
    constructor(customerId, productList) {
        this.customerId = customerId;
        this.productList = productList;
    }

    getCustomerId() {
        return this.customerId;
    }

    setCustomerId(customerId) {
        this.customerId = customerId;
    }

    getProductList() {
        return this.productList;
    }

    setProductList(productList) {
        this.productList = productList;
    }
}

module.exports = Order;
