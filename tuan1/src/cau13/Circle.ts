import { Shape } from "./Shape";

// Circle class
export class Circle extends Shape {
  constructor(public radius: number) {
    super("Circle");
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(3);
console.log(`${circle.name} area: ${circle.area().toFixed(2)}`);
// Circle area: 28.27
