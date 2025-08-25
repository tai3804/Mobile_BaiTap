"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const Employee_1 = require("./Employee");
// Manager extends Employee
class Manager extends Employee_1.Employee {
    constructor(name, salary, teamSize) {
        super(name, salary);
        this.teamSize = teamSize;
    }
    manageTeam() {
        console.log(`${this.name} is managing a team of ${this.teamSize} people.`);
    }
}
exports.Manager = Manager;
// Example usage
const manager = new Manager("Alice", 8000, 5);
manager.work(); // Alice is working...
manager.manageTeam(); // Alice is managing a team of 5 people.
