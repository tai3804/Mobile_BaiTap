import { Appliance } from "./Appliance";

// Fan implements Appliance
export class Fan extends Appliance {
  turnOn(): void {
    console.log(`${this.brand} fan is now running...`);
  }
}

// Example usage:
const fan = new Fan("Panasonic");
fan.turnOn(); // Panasonic fan is now running...
