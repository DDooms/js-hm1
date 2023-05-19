const Warehouse = require('./Warehouse');
const Customer = require('./Customer');
const Drone = require('./Drone');
const Order = require('./Order');
const Product = require('./product')
const DeliveryScheduler = require('./DeliveryScheduler');

// Set up the necessary data
const warehouse1 = new Warehouse();
const warehouse2 = new Warehouse();

const order1 = new Order([Product.Ham, Product.Eggs])
const order2 = new Order([Product.Milk, Product.Tomatoes])

const customer1 = new Customer("Customer 1", order1);
const customer2 = new Customer("Customer 2", order2);

const warehouses = [warehouse1, warehouse2];
const customers = [customer1, customer2];


// Create an instance of the DeliveryScheduler class
const deliveryScheduler = new DeliveryScheduler(warehouses, customers);

// Calculate the total delivery time
const totalDeliveryTime = deliveryScheduler.calculateTotalDeliveryTime();

// Print the total delivery time
console.log("Total delivery time:", totalDeliveryTime, "minutes");

