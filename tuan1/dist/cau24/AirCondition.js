"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirConditioner = void 0;
const Appliance_1 = require("./Appliance");
// AirConditioner implements Appliance
class AirConditioner extends Appliance_1.Appliance {
    turnOn() {
        console.log(`${this.brand} air conditioner is cooling the room...`);
    }
}
exports.AirConditioner = AirConditioner;
const ac = new AirConditioner("Daikin");
ac.turnOn(); // Daikin air conditioner is cooling the room...
