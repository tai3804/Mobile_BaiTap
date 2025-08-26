import { Payment } from "./Payment";

// CashPayment implements Payment
export class CashPayment implements Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} in cash.`);
  }
}
// Example usage:
const cash = new CashPayment();
cash.pay(100); // Paid 100 in cash.
