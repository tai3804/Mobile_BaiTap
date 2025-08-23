export class Product {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  public getPrice(): number {
    return this.price;
  }
  public toString(): string {
    return `Product info: ${this.name}, age: ${this.price}`;
  }
}

const products: Product[] = [
  new Product("Laptop", 1500),
  new Product("Mouse", 50),
  new Product("Keyboard", 120),
  new Product("Monitor", 90),
  new Product("Phone", 800),
];
const productsWithPriceBigger100 = products.filter((p) => {
  return p.getPrice() > 100;
});

console.log(productsWithPriceBigger100);
