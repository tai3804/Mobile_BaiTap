"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardPayment = void 0;
// CardPayment implements Payment
class CardPayment {
    constructor(cardNumber) {
        this.cardNumber = cardNumber;
    }
    pay(amount) {
        console.log(`Paid ${amount} using card ${this.cardNumber}.`);
    }
}
exports.CardPayment = CardPayment;
const card = new CardPayment("1234-5678-9876-5432");
card.pay(250); // Paid 250 using card 1234-5678-9876-5432.
