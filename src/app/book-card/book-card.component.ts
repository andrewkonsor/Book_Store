import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  books: Book[];
  checkout: ShoppingCartComponent;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks()
    .subscribe(data => {this.books = data 
      console.log(data);
    });
  }

  addToCart(){
    
  }

}
