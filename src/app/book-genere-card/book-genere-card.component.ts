import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-book-genere-card',
  templateUrl: './book-genere-card.component.html',
  styleUrls: ['./book-genere-card.component.css']
})
export class BookGenereCardComponent implements OnInit {
  @Input() books: Book[];
  @Input() genre: string;

  constructor(private bookService: BookService) { 
    
  }
  
  ngOnInit() {
    
  }

}
