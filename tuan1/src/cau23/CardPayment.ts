import { Payment } from "./Payment";

// CardPayment implements Payment
export class CardPayment implements Payment {
  constructor(private cardNumber: string) {}

  pay(amount: number): void {
    console.log(`Paid ${amount} using card ${this.cardNumber}.`);
  }
}

const card = new CardPayment("1234-5678-9876-5432");
card.pay(250); // Paid 250 using card 1234-5678-9876-5432.
