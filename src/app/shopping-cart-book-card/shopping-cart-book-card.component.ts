import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-shopping-cart-book-card',
  templateUrl: './shopping-cart-book-card.component.html',
  styleUrls: ['./shopping-cart-book-card.component.css']
})
export class ShoppingCartBookCardComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

}
