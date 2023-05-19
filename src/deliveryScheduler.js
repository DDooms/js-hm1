const Warehouse = require('./Warehouse');
const Customer = require('./Customer');
const Drone = require('./Drone');
const Order = require('./Order');

class DeliveryScheduler {
    constructor(warehouses, customers) {
        this.warehouses = warehouses;
        this.customers = customers;
        this.drones = []; // Array to store the drones
    }

    calculateTotalDeliveryTime() {
        let totalDeliveryTime = 0;
        let batteryLife;
        let dronesUsed = 0;

        for (const customer of this.customers) {
            // Find the nearest warehouse for the order
            const nearestWarehouse = this.findNearestWarehouse(customer.getCoordinates());

            // Get a drone for the warehouse (if available)
            const drone = this.getDroneForWarehouse(nearestWarehouse);

            if (drone) {
                drone.move(nearestWarehouse.getLocation()); // Move to the warehouse
                drone.wait();
                drone.move(customer.getCoordinates()); // Move to the customer

                // Update the drone's battery life and total delivery time after waiting
                totalDeliveryTime += drone.getTotalDeliveryTime();
                batteryLife = drone.getBatteryLife();
                dronesUsed++;
            }
        }

        console.log("Number of drones used:", dronesUsed);
        console.log("Remaining battery life:", batteryLife.toFixed(2) + "%");

        return totalDeliveryTime;
    }

    getDroneForWarehouse(warehouse) {
        // Check if there is an available drone for the warehouse
        for (const drone of this.drones) {
            if (drone.getCurrentLocation().x === warehouse.getLocation().x && drone.getCurrentLocation().y === warehouse.getLocation().y) {
                return drone; // Return the available drone
            }
        }

        // If no available drone found, create a new drone for the warehouse
        const newDrone = new Drone();
        newDrone.move(warehouse.getLocation()); // Move the new drone to the warehouse
        this.drones.push(newDrone); // Add the new drone to the array of drones
        return newDrone;
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
