"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
// Bike implements Vehicle
class Bike {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    drive() {
        console.log(`${this.brand} bike is riding at ${this.speed} km/h`);
    }
    stop() {
        console.log(`${this.brand} bike has stopped.`);
    }
}
exports.Bike = Bike;
const bike = new Bike("xe đạp xịn", 40);
bike.drive();
bike.stop();
