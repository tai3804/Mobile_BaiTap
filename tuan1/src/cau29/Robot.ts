import { Movable } from "./Movable";

// Robot implements Movable
export class Robot implements Movable {
  constructor(public model: string) {}

  move(): void {
    console.log(`Robot ${this.model} is walking forward...`);
  }
}

const robot = new Robot("RX-78");
robot.move(); // Robot RX-78 is walking forward...
