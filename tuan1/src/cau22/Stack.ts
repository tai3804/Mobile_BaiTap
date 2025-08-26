// Generic Stack class
export class Stack<T> {
  private items: T[] = [];

  // Thêm phần tử vào đỉnh stack
  push(item: T): void {
    this.items.push(item);
  }

  // Lấy và xóa phần tử ở đỉnh stack
  pop(): T | undefined {
    return this.items.pop();
  }

  // Xem phần tử ở đỉnh stack mà không xóa
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // Kiểm tra stack có rỗng không
  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

// Ví dụ sử dụng:
const stack = new Stack<number>();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30
console.log(stack.pop()); // 30
console.log(stack.pop()); // 20
console.log(stack.isEmpty()); // false
console.log(stack.pop()); // 10
console.log(stack.isEmpty()); // true
