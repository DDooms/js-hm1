const Drone = require('./drone.js');
const Facility = require('./facility.js');

// Instantiate drone objects
const drone1 = new Drone("D001", 1000);
// ...

// Instantiate facility objects
const facility1 = new Facility("F001", [0, 0], 1000);
// ...

console.log(drone1)
console.log(facility1)