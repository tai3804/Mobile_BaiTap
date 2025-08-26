export class User {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public toString(): string {
    return `Your name: ${this.name}`;
  }
}

console.log(new User("tai").toString());
