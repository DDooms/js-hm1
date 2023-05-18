class Customer {
    constructor(id, name, coordinates) {
        this.id = id;
        this.name = name;
        this.coordinates = coordinates;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getCoordinates() {
        return this.coordinates;
    }

    setName(newName) {
        this.name = newName;
    }

    // Method to calculate the distance between the customer and a given location
    calculateDistance(locationCoordinates) {
        const [x1, y1] = this.coordinates;
        const [x2, y2] = locationCoordinates;

        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

}

module.exports = Customer;
