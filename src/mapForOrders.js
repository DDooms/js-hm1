class MapForOrders {
    constructor(topRightCoordinate, drones, warehouses, customers, orders) {
        this.topRightCoordinate = topRightCoordinate;
        this.warehouses = warehouses;
        this.customers = customers;
        this.orders = orders;
        this._drones = drones;
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

    getWarehouseById(warehouseId) {
        return this.warehouses.find((warehouse) => warehouse.id === warehouseId);
    }

    addDrone(drone) {
        this.warehouses.push(drone);
    }

    getDronesById(dronesId) {
        return this.warehouses.find((drone) => drone.id === dronesId);
    }

    addCustomer(customer) {
        this.customers.push(customer);
    }

    getCustomerById(customerId) {
        return this.customers.find((customer) => customer.id === customerId);
    }

    addOrder(order) {
        this.orders.push(order);
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
