"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
// Shape class
class Shape {
    // Static method (gọi trực tiếp từ class, không cần tạo object)
    static describe() {
        console.log("A shape is a geometric figure like circle, square, triangle...");
    }
}
exports.Shape = Shape;
// Example usage:
Shape.describe(); // A shape is a geometric figure like circle, square, triangle...
