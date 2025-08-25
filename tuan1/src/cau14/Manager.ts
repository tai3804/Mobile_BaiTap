import { Employee } from "./Employee";

// Manager extends Employee
export class Manager extends Employee {
  constructor(name: string, salary: number, public teamSize: number) {
    super(name, salary);
  }

  manageTeam(): void {
    console.log(`${this.name} is managing a team of ${this.teamSize} people.`);
  }
}

// Example usage
const manager = new Manager("Alice", 8000, 5);
manager.work(); // Alice is working...
manager.manageTeam(); // Alice is managing a team of 5 people.
