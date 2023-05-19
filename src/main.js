const Warehouse = require('./Warehouse');
const Customer = require('./Customer');
const Drone = require('./Drone');
const Order = require('./Order');
const Product = require('./product')
const DeliveryScheduler = require('./DeliveryScheduler');

// Set up the necessary data
const warehouse1 = new Warehouse();
const warehouse2 = new Warehouse();
// const warehouse3 = new Warehouse();

const order1 = new Order([Product.Ham, Product.Eggs])
const order2 = new Order([Product.Milk, Product.Tomatoes])

const customer1 = new Customer("Customer 1", order1);
const customer2 = new Customer("Customer 2", order2);
const customer3 = new Customer("Customer 3", order2);

const warehouses = [warehouse1, warehouse2];
const customers = [customer1, customer2, customer3];

// Create an instance of the DeliveryScheduler class
const deliveryScheduler = new DeliveryScheduler(warehouses, customers);

const totalDeliveryTime = deliveryScheduler.calculateTotalDeliveryTime();
console.log("Total delivery time:", totalDeliveryTime, "minutes");
