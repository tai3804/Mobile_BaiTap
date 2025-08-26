import { Movable } from "./Movable";

// Car implements Movable
export class Car implements Movable {
  constructor(public brand: string) {}

  move(): void {
    console.log(`${this.brand} car is driving on the road...`);
  }
}

// Example usage:
const car = new Car("Toyota");
car.move(); // Toyota car is driving on the road...
