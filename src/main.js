const ProductsEnum = require('./productsEnum');
const Product = require('./product');
const Order = require('./order');
const Customer = require('./customer');
const Drone = require('./drone');
const Warehouse = require('./warehouse');
const MapForOrders = require('./mapForOrders');


// Create orders
const order1 = new Order([ProductsEnum.Tomatoes, ProductsEnum.Cucumber]);
const order2 = new Order([ProductsEnum.Cheese]);
const order3 = new Order([ProductsEnum.Tomatoes, ProductsEnum.Cucumber, ProductsEnum.Cheese]);


// Create customers
const customer1 = new Customer('John');
const customer2 = new Customer('Alice');
const customer3 = new Customer('Bob');

// Create warehouses
const warehouse1 = new Warehouse();
const warehouse2 = new Warehouse();
const warehouse3 = new Warehouse();

// Create drones
const drone1 = new Drone();
const drone2 = new Drone();
const drone3 = new Drone();

// Create the map for orders
const topRightCoordinate = [1000, 1000];
const mapForOrders = new MapForOrders(topRightCoordinate, [], [], [], []);

// Add warehouses, customers, products, and orders to the map
mapForOrders.addWarehouse(warehouse1);
mapForOrders.addWarehouse(warehouse2);
mapForOrders.addWarehouse(warehouse3);
mapForOrders.addDrone(drone1);
mapForOrders.addDrone(drone2);
mapForOrders.addDrone(drone3);
mapForOrders.addCustomer(customer1);
mapForOrders.addCustomer(customer2);
mapForOrders.addCustomer(customer3);
mapForOrders.addOrder(order1);
mapForOrders.addOrder(order2);
mapForOrders.addOrder(order3);

// Output the map for orders
console.log(mapForOrders);
