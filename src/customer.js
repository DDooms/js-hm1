class Customer {
    constructor(id, name, coordinates) {
        this.id = id;
        this.name = name;
        this.coordinates = coordinates;
    }

    // Getter for retrieving the customer's ID
    getId() {
        return this.id;
    }

    // Getter for retrieving the customer's name
    getName() {
        return this.name;
    }

    // Getter for retrieving the customer's coordinates
    getCoordinates() {
        return this.coordinates;
    }

    // Setter for updating the customer's name
    setName(newName) {
        this.name = newName;
    }

    // Method to calculate the distance between the customer and a given location
    calculateDistance(locationCoordinates) {
        const [x1, y1] = this.coordinates;
        const [x2, y2] = locationCoordinates;

        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    // Add any additional methods or business logic relevant to the Customer class
}

module.exports = Customer;
