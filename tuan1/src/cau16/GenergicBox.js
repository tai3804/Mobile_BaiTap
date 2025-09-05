"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
class Box {
    constructor(_value) {
        this._value = _value;
    }
    get value() {
        return this._value; // dùng getter để lộ ra ngoài
    }
    set value(v) {
        this._value = v; // dùng setter để cập nhật
    }
    static of(value) {
        return new Box(value);
    }
}
exports.Box = Box;
// Example usage
const numBox = new Box(42);
console.log(numBox.value); // 42
numBox.value = 100;
const strBox = Box.of("hello");
console.log(strBox.value); // "hello"
