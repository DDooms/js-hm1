class Customer {
    static nextId = 1;

    constructor(name, orders) {
        this.id = Customer.nextId++;
        this.name = name;
        this.currentLocation = {
            x: Math.floor(Math.random() * 1001),
            y: Math.floor(Math.random() * 1001),
        };
        this.orders = orders;
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

    addOrder(order) {
        this.orders.push(order);
    }

    getOrders() {
        return this.orders;
    }
}

module.exports = Customer;
