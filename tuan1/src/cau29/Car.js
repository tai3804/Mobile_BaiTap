"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
// Car implements Movable
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    move() {
        console.log(`${this.brand} car is driving on the road...`);
    }
}
exports.Car = Car;
// Example usage:
const car = new Car("Toyota");
car.move(); // Toyota car is driving on the road...
