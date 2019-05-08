import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { HomeComponent } from '../home/home.component';
import { CookieService } from 'ngx-cookie-service';
import { ShoppingCartBookCardComponent } from '../shopping-cart-book-card/shopping-cart-book-card.component';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;
  checkout: ShoppingCartComponent;
  home: HomeComponent;


  constructor(private bookService: BookService,
    private cookie: CookieService) { }

  ngOnInit() {
  }

  isUser(){
    return this.cookie.get("user") != "none";
  }

  removeBook(item){
    this.bookService.removeBook(item);
  }

  addToCart(book){
    console.log(book);
    this.bookService.addToCart(book);
  }

}
