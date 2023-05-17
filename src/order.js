class Order {
    constructor(customerId, productList) {
        this.customerId = customerId;
        this.productList = productList;
    }

    // Getter for customerId
    getCustomerId() {
        return this.customerId;
    }

    // Setter for customerId
    setCustomerId(customerId) {
        this.customerId = customerId;
    }

    // Getter for productList
    getProductList() {
        return this.productList;
    }

    // Setter for productList
    setProductList(productList) {
        this.productList = productList;
    }

    // Add other methods specific to the Order class as needed
}

module.exports = Order;
