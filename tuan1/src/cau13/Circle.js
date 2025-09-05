"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
// Circle class
class Circle extends Shape_1.Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
exports.Circle = Circle;
const circle = new Circle(3);
console.log(`${circle.name} area: ${circle.area().toFixed(2)}`);
// Circle area: 28.27
