export class Box<T> {
  constructor(private _value: T) {}

  get value(): T {
    return this._value; // dùng getter để lộ ra ngoài
  }

  set value(v: T) {
    this._value = v; // dùng setter để cập nhật
  }

  static of<T>(value: T): Box<T> {
    return new Box(value);
  }
}

// Example usage
const numBox = new Box<number>(42);
console.log(numBox.value); // 42
numBox.value = 100;

const strBox = Box.of("hello");
console.log(strBox.value); // "hello"
