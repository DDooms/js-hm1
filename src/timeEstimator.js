class TimeEstimator {
    static estimateDeliveryTime(route, drone) {
        // Logic for estimating delivery time based on route and drone capabilities
        const totalDistance = TimeEstimator.calculateTotalDistance(route);
         // Assuming the drone has a getSpeed() method
        return totalDistance / drone.getSpeed();
    }

    // Helper method to calculate the total distance of the route
    static calculateTotalDistance(route) {
        let totalDistance = 0;
        for (let i = 0; i < route.waypoints.length - 1; i++) {
            const currentWaypoint = route.waypoints[i];
            const nextWaypoint = route.waypoints[i + 1];
            const distance = TimeEstimator.calculateDistance(currentWaypoint, nextWaypoint);
            totalDistance += distance;
        }
        return totalDistance;
    }

    // Helper method to calculate the distance between two waypoints
    static calculateDistance(waypoint1, waypoint2) {
        const x1 = waypoint1.x;
        const y1 = waypoint1.y;
        const x2 = waypoint2.x;
        const y2 = waypoint2.y;

        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
}

module.exports = TimeEstimator;
