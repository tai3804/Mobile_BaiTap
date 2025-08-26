export class Person {
  constructor(private name: string, private age: number) {}

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  toString(): string {
    return `Name: ${this.name}, age: ${this.age}`;
  }
}

console.log(new Person("Tài", 10));
