import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import {MainComponent} from './pages/main/main.component';
import {MenuComponent} from './components/menu/menu.component';
import {BookListComponent} from './pages/book-list/book-list.component';
import {BookCardComponent} from './components/book-card/book-card.component';
import {MyBooksComponent} from './pages/my-books/my-books.component';
import {ManageBookComponent} from './pages/manage-book/manage-book.component';
import {RatingComponent} from './components/rating/rating.component';
import {BorrowedBookListComponent} from './pages/borrowed-book-list/borrowed-book-list.component';
import {ReturnBooksComponent} from './pages/return-books/return-books.component';
import {BookDetailsComponent} from './pages/book-details/book-details.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookRoutingModule,
    MainComponent,
    MenuComponent,
    BookListComponent,
    BookCardComponent,
    MyBooksComponent,
    ManageBookComponent,
    RatingComponent,
    BorrowedBookListComponent,
    ReturnBooksComponent,
    BookDetailsComponent
  ]
})
export class BookModule { }
