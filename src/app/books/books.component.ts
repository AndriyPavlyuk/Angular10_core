import {Component, OnInit} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];

  constructor() {
    this.books = [{
      title: 'JavaScript: The Good Parts',
      author: 'Douglas Crockford',
      year: 2008,
      pages: 172,
      description: 'This authoritative books scrapes away these bad features to reveal a subset of JavaScript that\'s more reliable, readable, and maintainable'
    },
      {
        title: 'Mastering TypeScript',
        author: 'Nathan Rozentals',
        year: 2015,
        pages: 364,
        description: 'Build enterprise-ready, industrial strength web applications using TypeScript and leading JavaScript frameworks'
      }];

  }

  ngOnInit(): void {
  }

  isJavascript(book: Book): boolean {
    return book.title.toLowerCase().indexOf('javascript') >= 0;
  }

}
