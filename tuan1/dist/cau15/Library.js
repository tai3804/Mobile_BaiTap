"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
const Book_1 = require("../cau15/Book");
const User_1 = require("../cau15/User");
// Library class
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Book "${book.title}" added to the library.`);
    }
    addUser(user) {
        this.users.push(user);
        console.log(`User "${user.name}" registered.`);
    }
    listBooks() {
        console.log("Books in the library:");
        this.books.forEach((b, i) => {
            console.log(`${i + 1}. ${b.title} by ${b.author} (${b.year})`);
        });
    }
    listUsers() {
        console.log("Registered users:");
        this.users.forEach((u, i) => {
            console.log(`${i + 1}. ${u.name} (ID: ${u.id})`);
        });
    }
}
exports.Library = Library;
// Example usage
const library = new Library();
const book1 = new Book_1.Book("Clean Code", "Robert C. Martin", 2008);
const book2 = new Book_1.Book("The Pragmatic Programmer", "Andrew Hunt", 1999);
const user1 = new User_1.User("Alice", 1);
const user2 = new User_1.User("Bob", 2);
library.addBook(book1);
library.addBook(book2);
library.addUser(user1);
library.addUser(user2);
library.listBooks();
library.listUsers();
