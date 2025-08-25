import { Flyable } from "./Flyable";

// Bird class implements Flyable
export class Bird implements Flyable {
  constructor(public name: string) {}

  fly(): void {
    console.log(`${this.name} is flying high in the sky!`);
  }
}

// Example usage
const bird = new Bird("Sparrow");
bird.fly(); // Sparrow is flying high in the sky!
