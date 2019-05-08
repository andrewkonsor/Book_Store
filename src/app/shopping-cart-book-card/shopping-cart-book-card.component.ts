import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-shopping-cart-book-card',
  templateUrl: './shopping-cart-book-card.component.html',
  styleUrls: ['./shopping-cart-book-card.component.css']
})
export class ShoppingCartBookCardComponent implements OnInit {
  @Input() book: Book;

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  removeBook(book){
    console.log(book);
    this.bookService.removeBookCart(book);
  }

}
