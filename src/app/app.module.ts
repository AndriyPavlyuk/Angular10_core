import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BookComponent} from './book/book.component';
import {BooksComponent} from './books/books.component';
import {QuotePipe} from './quote.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import {BookRegistrationComponent} from './book-registration-component/book-registration.component';
import {JsonPipe} from '@angular/common';
import {BookDetailComponent} from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    QuotePipe,
    BookRegistrationComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [JsonPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
