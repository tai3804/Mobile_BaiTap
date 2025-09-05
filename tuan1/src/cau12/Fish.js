"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = void 0;
// Fish class implements Swimmable
class Fish {
    constructor(name) {
        this.name = name;
    }
    swim() {
        console.log(`${this.name} is swimming in the water!`);
    }
}
exports.Fish = Fish;
const fish = new Fish("Nemo");
fish.swim(); // Nemo is swimming in the water!
