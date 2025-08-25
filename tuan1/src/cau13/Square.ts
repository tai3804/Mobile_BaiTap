import { Shape } from "./Shape";

// Square class
export class Square extends Shape {
  constructor(public side: number) {
    super("Square");
  }

  area(): number {
    return this.side * this.side;
  }
}

// Example usage
const square = new Square(4);
console.log(`${square.name} area: ${square.area()}`);
// Square area: 16

