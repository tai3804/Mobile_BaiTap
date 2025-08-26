"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
// Base class Animal
class Animal {
    constructor(name) {
        this.name = name;
    }
    // protected => chỉ dùng được trong class và lớp con
    makeSound() {
        console.log("Some generic animal sound");
    }
    // public method để gọi âm thanh
    sound() {
        this.makeSound();
    }
}
exports.Animal = Animal;
