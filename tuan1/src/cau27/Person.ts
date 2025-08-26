// Person base class
export class Person {
  constructor(public name: string, public age: number) {}

  introduce(): void {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
  }
}
