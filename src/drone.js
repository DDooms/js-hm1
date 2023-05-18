class Drone {
    constructor() {
        this.capacity = 1;
        this.consumption = 5;
        this.currentLocation = [Math.random() * 1000, Math.random() * 1000];
        this.totalDeliveryTime = 0;
        this.batteryLife = 100; // Initial battery life at 100%
    }

    getCapacity() {
        return this.capacity;
    }

    getConsumption() {
        return this.consumption;
    }

    getCurrentLocation() {
        return this.currentLocation;
    }

    getTotalDeliveryTime() {
        return this.totalDeliveryTime;
    }

    getBatteryLife() {
        return this.batteryLife;
    }

    move(targetLocation) {
        const [x1, y1] = this.currentLocation;
        const [x2, y2] = targetLocation;

        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const travelTime = distance; // 1 unit distance = 1 minute travel time

        // Calculate battery consumption based on distance traveled
        const batteryConsumption = distance / this.consumption; // 5 units drain 1% of battery life

        // Update the current location, total delivery time, and battery life
        this.currentLocation = targetLocation;
        this.totalDeliveryTime += travelTime;
        this.batteryLife -= batteryConsumption;
    }

    wait() {
        const minutes = 5
        this.totalDeliveryTime += minutes;
    }
}

module.exports = Drone;
