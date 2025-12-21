export class Reader {
  id: number;
  name: string;
  borrowLimit: number;
  borrowedBookIds: number[];

  constructor(
    id: number,
    name: string,
    borrowLimit: number,
    borrowedBookIds: number[]
  ) {
    this.id = id;
    this.name = name;
    this.borrowLimit = borrowLimit;
    this.borrowedBookIds = borrowedBookIds;
  }

  canBorrow() {
    return this.borrowedBookIds.length < this.borrowLimit;
  }
}
