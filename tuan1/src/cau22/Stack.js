"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
// Generic Stack class
class Stack {
    constructor() {
        this.items = [];
    }
    // Thêm phần tử vào đỉnh stack
    push(item) {
        this.items.push(item);
    }
    // Lấy và xóa phần tử ở đỉnh stack
    pop() {
        return this.items.pop();
    }
    // Xem phần tử ở đỉnh stack mà không xóa
    peek() {
        return this.items[this.items.length - 1];
    }
    // Kiểm tra stack có rỗng không
    isEmpty() {
        return this.items.length === 0;
    }
}
exports.Stack = Stack;
// Ví dụ sử dụng:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // 30
console.log(stack.pop()); // 30
console.log(stack.pop()); // 20
console.log(stack.isEmpty()); // false
console.log(stack.pop()); // 10
console.log(stack.isEmpty()); // true
