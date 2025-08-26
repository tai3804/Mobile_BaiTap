// Shape class
export class Shape {
  // Static method (gọi trực tiếp từ class, không cần tạo object)
  static describe(): void {
    console.log(
      "A shape is a geometric figure like circle, square, triangle..."
    );
  }
}

// Example usage:
Shape.describe(); // A shape is a geometric figure like circle, square, triangle...
