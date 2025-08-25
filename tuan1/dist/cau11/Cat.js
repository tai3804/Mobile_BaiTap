"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
// Cat class extending Animal
class Cat {
    constructor(name) {
        this.name = name;
    }
    sound() {
        this.meow();
    }
    meow() {
        console.log(`${this.name} says: Meow!`);
    }
}
exports.Cat = Cat;
const cat = new Cat("Whiskers");
cat.sound(); // Whiskers says: Meow!
cat.meow(); // Whiskers says: Meow!
