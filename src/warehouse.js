class Warehouse {
    static nextId = 1;

    constructor() {
        this.id = Warehouse.nextId++;
        this.location = [Math.random() * 1000, Math.random() * 1000];
    }

    getId() {
        return this.id;
    }

    getLocation() {
        return this.location;
    }
}

module.exports = Warehouse;