"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathUtil = void 0;
class MathUtil {
    // Ngăn không cho new MathUtil()
    constructor() { }
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero!");
        }
        return a / b;
    }
}
exports.MathUtil = MathUtil;
console.log(MathUtil.add(5, 3)); // 8
console.log(MathUtil.subtract(10, 4)); // 6
console.log(MathUtil.multiply(6, 7)); // 42
console.log(MathUtil.divide(20, 5)); // 4
