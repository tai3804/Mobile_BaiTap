"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bird = void 0;
// Bird class implements Flyable
class Bird {
    constructor(name) {
        this.name = name;
    }
    fly() {
        console.log(`${this.name} is flying high in the sky!`);
    }
}
exports.Bird = Bird;
// Example usage
const bird = new Bird("Sparrow");
bird.fly(); // Sparrow is flying high in the sky!
