class Drone {
    constructor() {
        this.capacity = 1;
        this.consumption = 5;
        this.currentLocation = {
            x: Math.floor(Math.random() * 1001),
            y: Math.floor(Math.random() * 1001)
        };
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

    calculateDistance(location1, location2) {
        const x1 = location1.x;
        const y1 = location1.y;
        const x2 = location2.x;
        const y2 = location2.y;

        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }


    move(targetLocation) {
        const distance = this.calculateDistance(this.currentLocation, targetLocation);
        const travelTime = distance / 100; // 100 unit distance = 1 minute travel time
        const batteryConsumption = distance / 50; // 50 units drain 1% of battery life

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
