enum LoanStatus {
  ACTIVE = "ACTIVE",
  RETURNED = "RETURNED",
}

class Loan {
  id: number;
  bookId: number;
  readerId: number;
  loanDate: Date;
  returnDate: Date | null;
  status: LoanStatus;

  constructor(
    id: number,
    bookId: number,
    readerId: number,
    loanDate: Date,
    returnDate: Date | null,
    status: LoanStatus
  ) {
    this.id = id;
    this.bookId = bookId;
    this.readerId = readerId;
    this.loanDate = loanDate;
    this.returnDate = returnDate;
    this.status = status;
  }
}

export { Loan, LoanStatus };
