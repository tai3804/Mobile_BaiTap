import { Product } from "./Product";

// Order class
export class Order {
  private products: Product[] = [];

  // Thêm sản phẩm vào đơn hàng
  addProduct(product: Product): void {
    this.products.push(product);
  }

  // Tính tổng giá đơn hàng
  getTotalPrice(): number {
    return this.products.reduce((total, p) => total + p.price, 0);
  }

  // Xem danh sách sản phẩm
  getProducts(): Product[] {
    return this.products;
  }
}

// Example usage:
const order = new Order();
order.addProduct({ name: "Laptop", price: 1200 });
order.addProduct({ name: "Mouse", price: 25 });
order.addProduct({ name: "Keyboard", price: 75 });

console.log(order.getProducts());
// [ { name: 'Laptop', price: 1200 }, { name: 'Mouse', price: 25 }, { name: 'Keyboard', price: 75 } ]

console.log("Total:", order.getTotalPrice());
// Total: 1300
