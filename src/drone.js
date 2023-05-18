class Drone {
    constructor(capacity, consumption) {
        this.capacity = capacity;
        this.consumption = consumption;
        this.currentLocation = [0, 0]; // Initial location at [0, 0]
        this.totalDeliveryTime = 0; // Total delivery time in minutes
    }

    getCapacity() {
        return this.capacity;
    }

    setCapacity(capacity) {
        this.capacity = capacity;
    }


    getConsumption() {
        return this.consumption;
    }

    setConsumption(consumption) {
        this.consumption = consumption;
    }

    getCurrentLocation() {
        return this.currentLocation;
    }

    setCurrentLocation(location) {
        this.currentLocation = location;
    }

    getTotalDeliveryTime() {
        return this.totalDeliveryTime;
    }

    setTotalDeliveryTime(time) {
        this.totalDeliveryTime = time;
    }

    // Method for moving the drone to a target location

    move(targetLocation) {
        const travelTime = Math.sqrt(
            Math.pow(targetLocation[0] - this.currentLocation[0], 2) +
            Math.pow(targetLocation[1] - this.currentLocation[1], 2)
        ); // Assuming 1 unit distance = 1 minute travel time

        // Update the current location and total delivery time
        this.currentLocation = targetLocation;
        this.totalDeliveryTime += travelTime;
    }

    // Method for waiting at a location

    wait(minutes) {
        this.totalDeliveryTime += minutes;
    }
}

module.exports = Drone;
