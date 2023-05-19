const Warehouse = require('./Warehouse');
const Customer = require('./Customer');
const Drone = require('./Drone');
const Order = require('./Order');

class DeliveryScheduler {
    constructor(warehouses, customers) {
        this.warehouses = warehouses;
        this.customers = customers;
    }

    calculateTotalDeliveryTime() {
        let totalDeliveryTime = 0;
        let batteryLife;

        for (const customer of this.customers) {
            // Find the nearest warehouse for the order
            const nearestWarehouse = this.findNearestWarehouse(customer.getCoordinates());

            // Create a new drone for each order
            const drone = new Drone();

            drone.move(nearestWarehouse.getLocation()); // Move to the warehouse
            drone.wait();
            drone.move(customer.getCoordinates()); // Move to the customer

            // Update the drone's battery life and total delivery time after waiting
            totalDeliveryTime += drone.getTotalDeliveryTime();
            batteryLife = drone.getBatteryLife();
        }

        // Calculate hours, minutes, and seconds
        const hours = Math.floor(totalDeliveryTime / 60);
        const minutes = Math.floor(totalDeliveryTime % 60);
        const seconds = Math.floor((totalDeliveryTime % 1) * 60);

        // Print the total delivery time in the desired format
        console.log("Total delivery time:", hours, "hours,", minutes, "minutes,", seconds, "seconds");

        console.log("Total battery left: " + batteryLife);
        return totalDeliveryTime;
    }


    findNearestWarehouse(customerLocation) {
        let nearestWarehouse;
        let shortestDistance = Infinity;

        for (const warehouse of this.warehouses) {
            const distance = this.calculateTravelTime(warehouse.getLocation(), customerLocation);

            if (distance < shortestDistance) {
                shortestDistance = distance;
                nearestWarehouse = warehouse;
            }
        }

        return nearestWarehouse;
    }

    calculateTravelTime(sourceLocation, targetLocation) {
        const drone = new Drone();

        return drone.calculateDistance(sourceLocation, targetLocation);
    }
}

module.exports = DeliveryScheduler;
