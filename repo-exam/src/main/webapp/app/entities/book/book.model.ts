export interface IBook {
  id?: number;
  author?: string | null;
  price?: number | null;
  date?: string | null;
  title?: string | null;
  pageNumber?: number | null;
}

export class Book implements IBook {
  constructor(
    public id?: number,
    public author?: string | null,
    public price?: number | null,
    public date?: string | null,
    public title?: string | null,
    public pageNumber?: number | null
  ) {}
}

export function getBookIdentifier(book: IBook): number | undefined {
  return book.id;
}
