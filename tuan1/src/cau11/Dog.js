"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
// Dog class extending Animal
class Dog {
    constructor(name) {
        this.name = name;
    }
    sound() {
        this.bark();
    }
    bark() {
        console.log(`${this.name} says: Woof!`);
    }
}
exports.Dog = Dog;
// Example usage:
const dog = new Dog("Buddy");
dog.sound(); // Buddy says: Woof!
dog.bark(); // Buddy says: Woof!
