class MapForOrders {
    constructor(topRightCoordinate, warehouses, customers, products, orders) {
        this.topRightCoordinate = topRightCoordinate;
        this.warehouses = warehouses;
        this.customers = customers;
        this.products = products;
        this.orders = orders;
    }

    getTopRightCoordinate() {
        return this.topRightCoordinate;
    }

    setTopRightCoordinate(topRightCoordinate) {
        this.topRightCoordinate = topRightCoordinate;
    }

    addWarehouse(warehouse) {
        this.warehouses.push(warehouse);
    }

    removeWarehouse(warehouseId) {
        this.warehouses = this.warehouses.filter((warehouse) => warehouse.id !== warehouseId);
    }

    getWarehouseById(warehouseId) {
        return this.warehouses.find((warehouse) => warehouse.id === warehouseId);
    }

    addCustomer(customer) {
        this.customers.push(customer);
    }

    removeCustomer(customerId) {
        this.customers = this.customers.filter((customer) => customer.id !== customerId);
    }

    getCustomerById(customerId) {
        return this.customers.find((customer) => customer.id === customerId);
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(productName) {
        this.products = this.products.filter((product) => product.name !== productName);
    }

    getProductByName(productName) {
        return this.products.find((product) => product.name === productName);
    }

    addOrder(order) {
        this.orders.push(order);
    }

    removeOrder(orderId) {
        this.orders = this.orders.filter((order) => order.id !== orderId);
    }

    getOrderById(orderId) {
        return this.orders.find((order) => order.id === orderId);
    }

    // Method to calculate the distance between two locations (used by Drone)

    calculateDistance(location1, location2) {
        return Math.sqrt(
            Math.pow(location2[0] - location1[0], 2) + Math.pow(location2[1] - location1[1], 2)
        );
    }

    // Method to estimate delivery time for the drone

    estimateDeliveryTime(drone, targetLocation) {
        const currentLocation = drone.getCurrentLocation();
         // Assuming 1 unit distance = 1 minute travel time
        return this.calculateDistance(currentLocation, targetLocation);
    }
}

module.exports = MapForOrders;
