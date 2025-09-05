"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Robot = void 0;
// Robot implements Movable
class Robot {
    constructor(model) {
        this.model = model;
    }
    move() {
        console.log(`Robot ${this.model} is walking forward...`);
    }
}
exports.Robot = Robot;
const robot = new Robot("RX-78");
robot.move(); // Robot RX-78 is walking forward...
