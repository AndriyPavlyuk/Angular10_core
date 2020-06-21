import {Component, OnInit} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: Book;

  constructor() {
    this.book = {
      author: 'Misko Genchev',
      description: 'Angular book',
      pages: 100,
      title: 'Angular 10',
      year: 2020
    };
  }

  ngOnInit(): void {
  }

}
