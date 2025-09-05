"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// Person base class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
    }
}
exports.Person = Person;
