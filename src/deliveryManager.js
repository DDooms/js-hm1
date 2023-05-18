const {estimateDeliveryTime} = require("./timeEstimator");

class DeliveryManager {
    constructor() {
        this.drones = [];
        this.routes = [];
    }

    getDrones() {
        return this.drones;
    }

    setDrones(drones) {
        this.drones = drones;
    }

    getRoutes() {
        return this.routes;
    }

    setRoutes(routes) {
        this.routes = routes;
    }

    addDrone(drone) {
        this.drones.push(drone);
    }

    removeDrone(index) {
        if (index >= 0 && index < this.drones.length) {
            this.drones.splice(index, 1);
        }
    }

    addRoute(route) {
        this.routes.push(route);
    }

    removeRoute(index) {
        if (index >= 0 && index < this.routes.length) {
            this.routes.splice(index, 1);
        }
    }

    assignRouteToDrone(route, drones) {
        // Find the closest drone to the warehouse and customer
        let closestDrone;
        let minDistance = Infinity;

        for (const drone of drones) {
            const distance = calculateDistance(drone, route); // Calculate the distance between the drone and the route
            if (distance < minDistance) {
                minDistance = distance;
                closestDrone = drone;
            }
        }

        if (closestDrone) {
            // Assign the route to the closest drone
            closestDrone.assignRoute(route);
        }
    }

    calculateTotalDeliveryTime() {
        let totalDeliveryTime = 0;

        for (const route of this.routes) {
            const routeDeliveryTime = estimateDeliveryTime(route, route.drone);
            totalDeliveryTime += routeDeliveryTime;
        }

        return totalDeliveryTime;
    }
}

function calculateDistance(drone, route) {
    // Logic to calculate the distance between the drone and the route
    // This can be based on the coordinates of the drone, waypoints, and customer coordinates
    // Implementation depends on the specific distance calculation method you want to use (e.g., Euclidean distance)
    // You can use mathematical formulas or libraries like geolib for distance calculations
    // Return the distance value
}

module.exports = DeliveryManager;
