import { Animal } from "../cau09/Animal";

// Cat class extending Animal
export class Cat implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound(): void {
    this.meow();
  }

  meow(): void {
    console.log(`${this.name} says: Meow!`);
  }
}

const cat = new Cat("Whiskers");
cat.sound(); // Whiskers says: Meow!
cat.meow(); // Whiskers says: Meow!
