class Warehouse {
    static nextId = 1;

    constructor() {
        this.id = Warehouse.nextId++;
        this.currentLocation = {
            x: Math.floor(Math.random() * 1001),
            y: Math.floor(Math.random() * 1001)
        };
    }

    getId() {
        return this.id;
    }

    getLocation() {
        return this.currentLocation;
    }
}

module.exports = Warehouse;