"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    toString() {
        return `Your name: ${this.name}`;
    }
}
exports.User = User;
console.log(new User("tai").toString());
