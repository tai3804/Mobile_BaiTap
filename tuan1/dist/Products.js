"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    toString() {
        return `Product info: ${this.name}, age: ${this.price}`;
    }
}
exports.Product = Product;
const products = [
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
