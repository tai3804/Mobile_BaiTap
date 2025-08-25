import { Vehicle } from "./Vehicle";

// Car implements Vehicle
export class Car implements Vehicle {
  constructor(public brand: string, public speed: number) {}

  drive(): void {
    console.log(`${this.brand} car is driving at ${this.speed} km/h`);
  }

  stop(): void {
    console.log(`${this.brand} car has stopped.`);
  }
}

const car = new Car("xe đạp xịn", 40);
car.drive();
car.stop();
