const Drone = require('./drone.js');
const Product = require("./product");
const Warehouse = require("./warehouse");
const Customer = require("./customer");
const Order = require("./order");
const MapForOrders = require("./mapForOrders")



// Example usage
const product1 = new Product("tomatoes");
const product2 = new Product("cucumber");

const warehouse1 = new Warehouse("Left warehouse", 100, 100);
const warehouse2 = new Warehouse("Right warehouse", 200, 200);

const customer1 = new Customer(1, "John Stocks", { x: 10, y: 10 });
const customer2 = new Customer(2, "Alfred Derrick", { x: 213, y: 187 });

const order1 = new Order(1, { tomatoes: 5, cucumber: 5 });
const order2 = new Order(2, { tomatoes: 2, cucumber: 2 });

const mapForOrders = new MapForOrders(
    { x: 280, y: 280 },
    [warehouse1, warehouse2],
    [customer1, customer2],
    [product1, product2],
    [order1, order2]
);

const drone = new Drone("500W", "1W");


const deliveryManager = new DeliveryManager();
const timeEstimator = new TimeEstimator();

