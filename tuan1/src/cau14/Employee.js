"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
// Base class
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    work() {
        console.log(`${this.name} is working...`);
    }
}
exports.Employee = Employee;
