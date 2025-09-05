"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    toString() {
        return `Book info: title: ${this.title}, author: ${this.author}, year: ${this.year}`;
    }
}
exports.Book = Book;
console.log(new Book("de men phieu luu ki", "kim dong", 2000).toString());
