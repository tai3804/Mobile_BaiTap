import { Animal } from "./Animal";

// Dog extends Animal
export class Dog extends Animal {
  protected makeSound(): void {
    console.log(`${this.name} says: Woof!`);
  }
}

// Example usage
const dog = new Dog("Buddy");
dog.sound(); // Buddy says: Woof!
