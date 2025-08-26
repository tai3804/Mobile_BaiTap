"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Person_1 = require("../cau1/Person");
class Student extends Person_1.Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    toString() {
        return super.toString() + `, grade: ${this.grade}`;
    }
}
exports.Student = Student;
console.log(new Student("tai", 10, 10));
