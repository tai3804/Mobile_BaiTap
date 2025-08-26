import { Person } from "../cau01/Person";
import { Student } from "../cau02/Student";

// Teacher extends Person
export class Teacher extends Person {
  constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }

  public introduce(): void {
    console.log(
      `Hi, I'm ${this.getName()}, ${this.getAge()} years old, and I teach ${
        this.subject
      }.`
    );
  }
}

// School class
export class School {
  private students: Student[] = [];
  private teachers: Teacher[] = [];

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
  }

  displayInfo(): void {
    console.log("=== School Information ===");

    console.log("\nTeachers:");
    this.teachers.forEach((t) => t.introduce());

    console.log("\nStudents:");
    this.students.forEach((s) => console.log(s.toString()));
  }
}

// Example usage
const school = new School();
school.addTeacher(new Teacher("Alice", 30, "Mathematics"));
school.addTeacher(new Teacher("Bob", 40, "Physics"));
school.addStudent(new Student("Charlie", 15, 10));
school.addStudent(new Student("Daisy", 14, 9));

school.displayInfo();
