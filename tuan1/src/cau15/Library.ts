import { Book } from "../cau15/Book";
import { User } from "../cau15/User";

// Library class
export class Library {
  private books: Book[] = [];
  private users: User[] = [];

  addBook(book: Book): void {
    this.books.push(book);
    console.log(`Book "${book.title}" added to the library.`);
  }

  addUser(user: User): void {
    this.users.push(user);
    console.log(`User "${user.name}" registered.`);
  }

  listBooks(): void {
    console.log("Books in the library:");
    this.books.forEach((b, i) => {
      console.log(`${i + 1}. ${b.title} by ${b.author} (${b.year})`);
    });
  }

  listUsers(): void {
    console.log("Registered users:");
    this.users.forEach((u, i) => {
      console.log(`${i + 1}. ${u.name} (ID: ${u.id})`);
    });
  }
}

// Example usage
const library = new Library();

const book1 = new Book("Clean Code", "Robert C. Martin", 2008);
const book2 = new Book("The Pragmatic Programmer", "Andrew Hunt", 1999);

const user1 = new User("Alice", 1);
const user2 = new User("Bob", 2);

library.addBook(book1);
library.addBook(book2);
library.addUser(user1);
library.addUser(user2);

library.listBooks();
library.listUsers();
