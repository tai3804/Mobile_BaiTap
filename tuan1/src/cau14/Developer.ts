import { Employee } from "./Employee";

// Developer extends Employee
export class Developer extends Employee {
  constructor(name: string, salary: number, public language: string) {
    super(name, salary);
  }

  writeCode(): void {
    console.log(`${this.name} is writing ${this.language} code.`);
  }
}

const dev = new Developer("Bob", 6000, "TypeScript");
dev.work(); // Bob is working...
dev.writeCode(); // Bob is writing TypeScript code.
