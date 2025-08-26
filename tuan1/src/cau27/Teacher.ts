import { Person } from "./Person";

// Teacher extends Person
export class Teacher extends Person {
  constructor(name: string, age: number, public subject: string) {
    super(name, age); // gọi constructor của Person
  }

  // override introduce
  introduce(): void {
    console.log(
      `Hi, I'm ${this.name}, ${this.age} years old and I teach ${this.subject}.`
    );
  }
}

// Example usage:
const teacher = new Teacher("Alice", 30, "Mathematics");
teacher.introduce();
// Hi, I'm Alice, 30 years old and I teach Mathematics.
