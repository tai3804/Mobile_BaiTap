import { Appliance } from "./Appliance";

// AirConditioner implements Appliance
export class AirConditioner extends Appliance {
  turnOn(): void {
    console.log(`${this.brand} air conditioner is cooling the room...`);
  }
}

const ac = new AirConditioner("Daikin");
ac.turnOn(); // Daikin air conditioner is cooling the room...
