"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = exports.Teacher = void 0;
const Person_1 = require("../cau01/Person");
const Student_1 = require("../cau02/Student");
// Teacher extends Person
class Teacher extends Person_1.Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        console.log(`Hi, I'm ${this.getName()}, ${this.getAge()} years old, and I teach ${this.subject}.`);
    }
}
exports.Teacher = Teacher;
// School class
class School {
    constructor() {
        this.students = [];
        this.teachers = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    displayInfo() {
        console.log("=== School Information ===");
        console.log("\nTeachers:");
        this.teachers.forEach((t) => t.introduce());
        console.log("\nStudents:");
        this.students.forEach((s) => console.log(s.toString()));
    }
}
exports.School = School;
// Example usage
const school = new School();
school.addTeacher(new Teacher("Alice", 30, "Mathematics"));
school.addTeacher(new Teacher("Bob", 40, "Physics"));
school.addStudent(new Student_1.Student("Charlie", 15, 10));
school.addStudent(new Student_1.Student("Daisy", 14, 9));
school.displayInfo();
