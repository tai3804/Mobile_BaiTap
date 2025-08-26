import { Animal } from "../cau09/Animal";

// Dog class extending Animal
export class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound(): void {
    this.bark();
  }

  bark(): void {
    console.log(`${this.name} says: Woof!`);
  }
}

// Example usage:
const dog = new Dog("Buddy");
dog.sound(); // Buddy says: Woof!
dog.bark(); // Buddy says: Woof!
