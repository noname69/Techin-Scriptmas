export class Book {
  id: number;
  title: string;
  author: string;
  totalCopies: number;
  availableCopies: number;

  constructor(
    id: number,
    title: string,
    author: string,
    totalCopies: number,
    availableCopies: number
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.totalCopies = totalCopies;
    this.availableCopies = availableCopies;
  }

  isAvailable() {
    return this.availableCopies > 0;
  }
}
