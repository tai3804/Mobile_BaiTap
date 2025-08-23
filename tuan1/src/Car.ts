export class Car {
  private brand: string;
  private model: string;
  private year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  public toString(): string {
    return `Car info: brand ${this.brand}, model: ${this.model}, year: ${this.year}`;
  }
}
