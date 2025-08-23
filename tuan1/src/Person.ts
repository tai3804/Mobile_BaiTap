export class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  toString(): string {
    return `Name: ${this.name}, age: ${this.age}`;
  }
}
