"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fan = void 0;
const Appliance_1 = require("./Appliance");
// Fan implements Appliance
class Fan extends Appliance_1.Appliance {
    turnOn() {
        console.log(`${this.brand} fan is now running...`);
    }
}
exports.Fan = Fan;
// Example usage:
const fan = new Fan("Panasonic");
fan.turnOn(); // Panasonic fan is now running...
