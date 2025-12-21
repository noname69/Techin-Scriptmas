import { Book } from "./library/Book";
import { Reader } from "./library/Reader";
import { Library } from "./library/Library";

function main() {
  const library = new Library();

  const book1 = new Book(1, "Clean Code", "Robert C. Martin", 2, 2);
  const book2 = new Book(2, "The Pragmatic Programmer", "Andrew Hunt", 1, 1);
  const book3 = new Book(3, "Refactoring", "Martin Fowler", 1, 1);

  const reader1 = new Reader(1, "Alice", 2, []);
  const reader2 = new Reader(2, "Bob", 1, []);
  //   const reader3 = new Reader(3, "Charlie", 1, []);

  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);

  library.registerReader(reader1);
  library.registerReader(reader2);
  //   library.registerReader(reader3);

  library.borrowBook(reader1.id, book1.id, new Date());
  library.borrowBook(reader1.id, book1.id, new Date());
  library.borrowBook(reader2.id, book1.id, new Date());
  //   library.borrowBook(reader1.id, book2.id, new Date());
  library.returnBook(1, new Date());
  //   library.borrowBook(reader2.id, book1.id, new Date());
  //   library.borrowBook(reader3.id, book1.id, new Date());
  //   library.borrowBook(reader3.id, book2.id, new Date());
  //   library.returnBook(4, new Date());
  //   library.borrowBook(reader1.id, book3.id, new Date());
  //   library.borrowBook(reader1.id, book3.id, new Date());

  library.printChristmasReport();
}

main();
