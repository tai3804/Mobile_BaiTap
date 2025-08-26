"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashPayment = void 0;
// CashPayment implements Payment
class CashPayment {
    pay(amount) {
        console.log(`Paid ${amount} in cash.`);
    }
}
exports.CashPayment = CashPayment;
// Example usage:
const cash = new CashPayment();
cash.pay(100); // Paid 100 in cash.
