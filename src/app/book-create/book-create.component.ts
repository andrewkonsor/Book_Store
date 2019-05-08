import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  book: Book = {
    Title: '',
    Author: '',
    Genre: '',
    ISBN: 0,
    Price: 0,
    Image: '',
    Description: '',
    ID: 0
  };
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }
  
  onSubmit(){
    if(this.book.Title != '' && this.book.Author != '' && this.book.Genre != '' &&
    this.book.ISBN != 0 && this.book.Price != 0 && this.book.Description != ''){
      this.bookService.addBook(this.book);
    }
    this.book.Title = '';
    this.book.Author = '';
    this.book.Genre = '';
    this.book.ISBN = 0;
    this.book.Price = 0;
    this.book.Image = '';
    this.book.Description = '';
  }

}
