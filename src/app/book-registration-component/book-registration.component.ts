import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrls: ['./book-registration.component.css']
})
export class BookRegistrationComponent implements OnInit {

  constructor(private bookService: BookService, private jsonPipe: JsonPipe) {
  }

  ngOnInit(): void {
  }

  register(book: Book): void {
    console.log('Saved book: ' + this.jsonPipe.transform(book));
  }

}
