import { Vehicle } from "./Vehicle";

// Bike implements Vehicle
export class Bike implements Vehicle {
  constructor(public brand: string, public speed: number) {}

  drive(): void {
    console.log(`${this.brand} bike is riding at ${this.speed} km/h`);
  }

  stop(): void {
    console.log(`${this.brand} bike has stopped.`);
  }
}

const bike = new Bike("xe đạp xịn", 40);
bike.drive();
bike.stop();
