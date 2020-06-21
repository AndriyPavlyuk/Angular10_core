import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BookComponent} from './book/book.component';
import {BooksComponent} from './books/books.component';
import {QuotePipe} from './quote.pipe';
import {FormsModule} from '@angular/forms';
import {BookRegistrationComponent} from './book-registration-component/book-registration.component';
import {JsonPipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    QuotePipe,
    BookRegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [JsonPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
