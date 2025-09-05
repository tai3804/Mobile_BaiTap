"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recangle = void 0;
class Recangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return (this.width + this.height) * 2;
    }
    perimeter() {
        return this.width * this.height;
    }
    toString() {
        return `Reactangle info: width: ${this.width}, height: ${this.height}`;
    }
}
exports.Recangle = Recangle;
const rec = new Recangle(10, 20);
console.log(`area: ${rec.area()}`);
console.log(`perimeter: ${rec.perimeter()}`);
