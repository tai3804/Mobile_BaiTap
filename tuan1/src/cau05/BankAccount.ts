export class BankAccount {
  private balance: number;

  public constructor(balance: number) {
    this.balance = balance;
  }

  public deposit(value: number): void {
    if (value <= 0) throw new Error("Value of money must be bigger than 0!");
    this.balance += value;
    console.log("deposit successfully!");
  }

  public withdraw(value: number): void {
    if (value <= 0) throw new Error("Value of money must be bigger than 0!");
    if (value > this.balance)
      throw new Error(
        "Cannot with draw, value of money is bigger than your balance!"
      );
    this.balance -= value;
    console.log("withdraw successfully!");
  }

  public toString(): string {
    return `Your balance: ${this.balance}`;
  }
}

const acc = new BankAccount(100);

console.log(acc.deposit(10));
console.log(acc.withdraw(200));
