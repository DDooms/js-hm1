class Customer {
    static nextId = 1;

    constructor(name) {
        this.id = Customer.nextId++;
        this.name = name;
        this.currentLocation = [Math.random() * 1000, Math.random() * 1000];
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getCoordinates() {
        return this.currentLocation;
    }

    setName(newName) {
        this.name = newName;
    }

    calculateDistance(locationCoordinates) {
        const [x1, y1] = this.currentLocation;
        const [x2, y2] = locationCoordinates;

        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
}

module.exports = Customer;
