import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { BookComponent } from '../list/book.component';
import { BookDetailComponent } from '../detail/book-detail.component';
import { BookRoutingResolveService } from './book-routing-resolve.service';

const bookRoute: Routes = [
  {
    path: '',
    component: BookComponent,
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: BookDetailComponent,
    resolve: {
      book: BookRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(bookRoute)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
