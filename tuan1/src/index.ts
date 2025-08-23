import { Person } from "./Person";
import { Student } from "./Student";
import { Car } from "./Car";

const per = new Person("tai", 21);
const student = new Student("Tai", 21, 10);
const car = new Car("toyota", "black", 2025);

console.log(car.toString());
