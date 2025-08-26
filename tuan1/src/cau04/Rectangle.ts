export class Recangle {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public area(): number {
    return (this.width + this.height) * 2;
  }

  public perimeter(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Reactangle info: width: ${this.width}, height: ${this.height}`;
  }
}

const rec = new Recangle(10, 20);
console.log(`area: ${rec.area()}`);
console.log(`perimeter: ${rec.perimeter()}`);
