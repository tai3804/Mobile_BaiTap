"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
const Student_1 = require("./Student");
const Car_1 = require("./Car");
const per = new Person_1.Person("tai", 21);
const student = new Student_1.Student("Tai", 21, 10);
const car = new Car_1.Car("toyota", "black", 2025);
console.log(car.toString());
