"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const Person_1 = require("./Person");
// Teacher extends Person
class Teacher extends Person_1.Person {
    constructor(name, age, subject) {
        super(name, age); // gọi constructor của Person
        this.subject = subject;
    }
    // override introduce
    introduce() {
        console.log(`Hi, I'm ${this.name}, ${this.age} years old and I teach ${this.subject}.`);
    }
}
exports.Teacher = Teacher;
// Example usage:
const teacher = new Teacher("Alice", 30, "Mathematics");
teacher.introduce();
// Hi, I'm Alice, 30 years old and I teach Mathematics.
