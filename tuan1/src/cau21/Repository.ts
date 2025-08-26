// Generic Repository
export class Repository<T> {
  private items: T[] = [];

  // Thêm 1 item
  add(item: T): void {
    this.items.push(item);
  }

  // Lấy tất cả items
  getAll(): T[] {
    return this.items;
  }
}

// Ví dụ sử dụng:
interface User {
  id: number;
  name: string;
}

const userRepo = new Repository<User>();

userRepo.add({ id: 1, name: "Alice" });
userRepo.add({ id: 2, name: "Bob" });

console.log(userRepo.getAll());
// Output: [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob'} ]
