// Base class Animal
export class Animal {
  constructor(public name: string) {}

  // protected => chỉ dùng được trong class và lớp con
  protected makeSound(): void {
    console.log("Some generic animal sound");
  }

  // public method để gọi âm thanh
  public sound(): void {
    this.makeSound();
  }
}
