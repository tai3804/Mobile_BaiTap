"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cat_1 = require("../cau11/Cat");
const Dog_1 = require("../cau11/Dog");
const animal = [new Cat_1.Cat("Meo anh long ngan"), new Dog_1.Dog("gau dan")];
animal.forEach((a) => {
    a.sound();
});
