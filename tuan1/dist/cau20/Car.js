"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
// Car implements Vehicle
class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    drive() {
        console.log(`${this.brand} car is driving at ${this.speed} km/h`);
    }
    stop() {
        console.log(`${this.brand} car has stopped.`);
    }
}
exports.Car = Car;
const car = new Car("xe đạp xịn", 40);
car.drive();
car.stop();
