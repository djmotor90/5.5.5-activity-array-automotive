// mercurySedan.js
// This includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass");

class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num) {
        if (this.passengers < this.maximumPassengers) {
            this.passengers += num;
            // Ensure passengers do not exceed maximum
            this.passengers = Math.min(this.passengers, this.maximumPassengers);
            return true; // availableRoom is true
        }
        return false; // availableRoom is false
    }

    start() {
        if (this.fuel > 0) {
            this.started = true;
            console.log("engine started...!!!");
        } else {
            this.started = false;
            console.log("engine cannot start...");
        }
    }

    checkForService(mileage) {
        if (mileage > 30000) {
            this.scheduleService = true; // Note: scheduleService is a property
            console.log("Time for maintenance.");
        }
    }
}

// Creating Instances and Testing Them
let mercurySedan1 = new Car("Mercury", "Sedan", "2024", "Blue", 10000);
console.log(mercurySedan1.make); // should print "Mercury"

mercurySedan1.loadPassenger(4);
console.log(mercurySedan1.passengers); // should print 4

mercurySedan1.start(); // should print "engine started...!!!"

// Using the renamed method
mercurySedan1.checkForService(35000); // should set scheduleService to true and print "Time for maintenance."
console.log(mercurySedan1.scheduleService); // should print true
