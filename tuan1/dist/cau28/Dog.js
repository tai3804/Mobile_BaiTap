"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const Animal_1 = require("./Animal");
// Dog extends Animal
class Dog extends Animal_1.Animal {
    makeSound() {
        console.log(`${this.name} says: Woof!`);
    }
}
exports.Dog = Dog;
// Example usage
const dog = new Dog("Buddy");
dog.sound(); // Buddy says: Woof!
