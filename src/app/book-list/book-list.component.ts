import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() books: Book[];

  constructor(private bookService: BookService) {
   }

  ngOnInit() {
    this.bookService.getBooks()
    .subscribe(data => {this.books = data 
      console.log(data);
    });
  }

}
