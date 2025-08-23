export class Account {
  readonly id: string;
  private name: string;
  public dept: string;

  constructor(id: string, name: string, dept: string) {
    this.id = id;
    this.name = name;
    this.dept = dept;
  }
}
