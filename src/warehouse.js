class Warehouse {
    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
    }

    // Getter and setter for name
    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    // Getter and setter for x coordinate
    getX() {
        return this.x;
    }

    setX(x) {
        this.x = x;
    }

    // Getter and setter for y coordinate
    getY() {
        return this.y;
    }

    setY(y) {
        this.y = y;
    }
}

module.exports = Warehouse;
