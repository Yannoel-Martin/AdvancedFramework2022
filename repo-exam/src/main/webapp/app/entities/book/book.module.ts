import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { BookComponent } from './list/book.component';
import { BookDetailComponent } from './detail/book-detail.component';
import { BookRoutingModule } from './route/book-routing.module';

@NgModule({
  imports: [SharedModule, BookRoutingModule],
  declarations: [BookComponent, BookDetailComponent],
})
export class BookModule {}
