import { Logger } from "../Logger";
import { Book } from "./Book";
import { Loan, LoanStatus } from "./Loan";
import { Reader } from "./Reader";

export class Library {
  books: Book[] = [];
  readers: Reader[] = [];
  loans: Loan[] = [];
  logger: Logger;

  constructor() {
    this.logger = new Logger();
  }

  addBook(book: Book) {
    this.books.push(book);
  }

  registerReader(reader: Reader) {
    this.readers.push(reader);
  }

  borrowBook(readerId: number, bookId: number, date: Date) {
    const reader = this.readers.find((reader) => reader.id === readerId);
    const book = this.books.find((book) => book.id === bookId);

    if (!reader || !book) {
      this.logger.log(
        "BORROW FAILED: " +
          reader?.name +
          ' cannot borrow "' +
          book?.title +
          '" (book not found)'
      );
      return;
    }

    // check if reader can borrow
    if (!reader.canBorrow()) {
      this.logger.log(
        "BORROW FAILED: " +
          reader.name +
          ' cannot borrow "' +
          book.title +
          '" (borrow limit reached)'
      );
      return;
    }

    // check if book is available
    if (!book.isAvailable()) {
      this.logger.log(
        "BORROW FAILED: " +
          reader.name +
          ' cannot borrow "' +
          book.title +
          '" (no copies available)'
      );
      return;
    }

    reader.borrowedBookIds.push(bookId);
    book.availableCopies--;

    const loan = new Loan(
      this.loans.length + 1,
      bookId,
      readerId,
      date,
      null,
      LoanStatus.ACTIVE
    );
    this.loans.push(loan);
    this.logger.log(
      "BORROW OK: " + reader.name + ' borrowed "' + book.title + '"'
    );
  }

  returnBook(loanId: number, date: Date) {
    const loan = this.loans.find((loan) => loan.id === loanId);
    if (!loan) {
      this.logger.log("RETURN FAILED: Loan not found");
      return;
    }
    const book = this.books.find((book) => book.id === loan.bookId);
    if (!book) {
      this.logger.log("RETURN FAILED: Book not found");
      return;
    }
    const reader = this.readers.find((reader) => reader.id === loan.readerId);
    if (!reader) {
      this.logger.log("RETURN FAILED: Reader not found");
      return;
    }
    reader.borrowedBookIds.splice(reader.borrowedBookIds.indexOf(book.id), 1);
    book.availableCopies++;
    loan.returnDate = date;
    loan.status = LoanStatus.RETURNED;
    this.logger.log(
      'RETURN OK: "' + book.title + '" returned by ' + reader.name
    );
  }

  getActiveLoans() {
    return this.loans.filter((loan) => loan.status === LoanStatus.ACTIVE);
  }

  printChristmasReport() {
    this.logger.log("\nCHRISTMAS LIBRARY REPORT");
    this.books.forEach((book) => {
      this.logger.log(
        `${book.title}: ${book.availableCopies} / ${book.totalCopies} available`
      );
    });
    this.logger.log("\nACTIVE LOANS");
    this.getActiveLoans().forEach((loan) => {
      const reader = this.readers.find((reader) => reader.id === loan.readerId);
      const book = this.books.find((book) => book.id === loan.bookId);
      if (!reader || !book) {
        this.logger.log("ACTIVE LOAN FAILED: Reader or book not found");
        return;
      }
      this.logger.log(`${reader.name} → ${book.title}`);
    });
  }
}
