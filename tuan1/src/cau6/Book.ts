export class Book {
  private title: string;
  private author: string;
  private year: number;

  public constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  public toString(): String {
    return `Book info: title: ${this.title}, author: ${this.author}, year: ${this.year}`;
  }
}
