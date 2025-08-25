// Base class
export class Employee {
  constructor(public name: string, public salary: number) {}

  work(): void {
    console.log(`${this.name} is working...`);
  }
}
