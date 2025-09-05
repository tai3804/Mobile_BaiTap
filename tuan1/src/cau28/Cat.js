"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
const Animal_1 = require("./Animal");
// Cat extends Animal
class Cat extends Animal_1.Animal {
    makeSound() {
        console.log(`${this.name} says: Meow!`);
    }
}
exports.Cat = Cat;
const cat = new Cat("Kitty");
cat.sound(); // Kitty says: Meow!
