import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Book } from '../book'; 
import { BookService } from '../book.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  orderPlaced: boolean = false;
  books: Book[] = [];
  cust: Customer = {
    name: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: 0
  }
  constructor(private custService: CustomerService,
    private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.shopBooks;
  }

  onSubmit(){
    if(this.cust.name != '' && this.cust.address1 != '' && this.cust.city != '' &&
    this.cust.zip != 0){
      this.custService.addCustomer(this.cust);
      this.orderPlaced = true;
    }
    this.cust.name = '';
    this.cust.address1= '';
    this.cust.address2= '';
    this.cust.city= '';
    this.cust.state= '';
    this.cust.zip= 0;
  }

}
