// Abstract class Shape
export abstract class Shape {
  constructor(public name: string) {}

  // abstract method: subclasses must implement
  abstract area(): number;
}
