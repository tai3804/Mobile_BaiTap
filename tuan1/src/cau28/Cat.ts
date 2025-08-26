import { Animal } from "./Animal";

// Cat extends Animal
export class Cat extends Animal {
  protected makeSound(): void {
    console.log(`${this.name} says: Meow!`);
  }
}
const cat = new Cat("Kitty");
cat.sound(); // Kitty says: Meow!
