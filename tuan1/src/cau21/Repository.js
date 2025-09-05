"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
// Generic Repository
class Repository {
    constructor() {
        this.items = [];
    }
    // Thêm 1 item
    add(item) {
        this.items.push(item);
    }
    // Lấy tất cả items
    getAll() {
        return this.items;
    }
}
exports.Repository = Repository;
const userRepo = new Repository();
userRepo.add({ id: 1, name: "Alice" });
userRepo.add({ id: 2, name: "Bob" });
console.log(userRepo.getAll());
// Output: [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob'} ]
