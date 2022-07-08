import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { IBook } from '../book.model';
import { BookService } from '../service/book.service';

@Component({
  selector: 'jhi-book',
  templateUrl: './book.component.html',
})
export class BookComponent implements OnInit {
  books?: IBook[];
  isLoading = false;

  constructor(protected bookService: BookService) {}

  loadAll(): void {
    this.isLoading = true;

    this.bookService.query().subscribe({
      next: (res: HttpResponse<IBook[]>) => {
        this.isLoading = false;
        this.books = res.body ?? [];
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  ngOnInit(): void {
    this.loadAll();
  }

  trackId(_index: number, item: IBook): number {
    return item.id!;
  }
}
