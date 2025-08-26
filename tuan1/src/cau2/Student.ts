import { Person } from "../cau1/Person";

export class Student extends Person {
  private grade: number;

  constructor(name: string, age: number, grade: number) {
    super(name, age);
    this.grade = grade;
  }

  override toString(): string {
    return super.toString() + `, grade: ${this.grade}`;
  }
}

console.log(new Student("tai", 10, 10));
