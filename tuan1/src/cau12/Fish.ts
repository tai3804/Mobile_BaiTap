import { Swimmable } from "./Swimmable";

// Fish class implements Swimmable
export class Fish implements Swimmable {
  constructor(public name: string) {}

  swim(): void {
    console.log(`${this.name} is swimming in the water!`);
  }
}

const fish = new Fish("Nemo");
fish.swim(); // Nemo is swimming in the water!
