"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const Shape_1 = require("./Shape");
// Square class
class Square extends Shape_1.Shape {
    constructor(side) {
        super("Square");
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}
exports.Square = Square;
// Example usage
const square = new Square(4);
console.log(`${square.name} area: ${square.area()}`);
// Square area: 16
