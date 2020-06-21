import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {JsonPipe} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrls: ['./book-registration.component.css']
})
export class BookRegistrationComponent implements OnInit {

  private bookForm: FormGroup;

  constructor(private bookService: BookService, private jsonPipe: JsonPipe,
              formBuilder: FormBuilder) {
    this.bookForm = formBuilder.group({
      title: formBuilder.control('', [Validators.required]),
      author: formBuilder.control('', [Validators.required]),
      // pages: formBuilder.control('', [Validators.required]),
      // description: formBuilder.control('', []),
      // year: formBuilder.control('', [Validators.required])
    });
  }

  isValid(controlName: string): boolean {
    return this.bookForm.get(controlName)!.dirty && !this.bookForm.get(controlName)!.valid;
  }

  ngOnInit(): void {
  }

  register(): void {
    console.log('Saved book: ' + this.jsonPipe.transform(this.bookForm.value));
  }

}
