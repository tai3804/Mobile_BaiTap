"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(value) {
        if (value <= 0)
            throw new Error("Value of money must be bigger than 0!");
        this.balance += value;
        console.log("deposit successfully!");
    }
    withdraw(value) {
        if (value <= 0)
            throw new Error("Value of money must be bigger than 0!");
        if (value > this.balance)
            throw new Error("Cannot with draw, value of money is bigger than your balance!");
        this.balance -= value;
        console.log("withdraw successfully!");
    }
    toString() {
        return `Your balance: ${this.balance}`;
    }
}
exports.BankAccount = BankAccount;
const acc = new BankAccount(100);
console.log(acc.deposit(10));
console.log(acc.withdraw(200));
