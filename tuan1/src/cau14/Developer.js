"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = void 0;
const Employee_1 = require("./Employee");
// Developer extends Employee
class Developer extends Employee_1.Employee {
    constructor(name, salary, language) {
        super(name, salary);
        this.language = language;
    }
    writeCode() {
        console.log(`${this.name} is writing ${this.language} code.`);
    }
}
exports.Developer = Developer;
const dev = new Developer("Bob", 6000, "TypeScript");
dev.work(); // Bob is working...
dev.writeCode(); // Bob is writing TypeScript code.
