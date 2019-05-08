import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';
import { Customer } from './customer';
import { CustomerService } from './customer.service';
import { BookService } from './book.service';
import { Book } from './book';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;
    books: Book[];
    // cust: Customer = {
    //     name: 'Bobby Shmurda',
    //     address1: '20 20th Ave. N',
    //     address2: '',
    //     city: 'Minot',
    //     state: 'ND',
    //     zip: 58102
    // }
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private bookService: BookService,
        private customerService: CustomerService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        this.bookService.getBooks()
        .subscribe(data => {this.books = data 
        console.log(data);
        });
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/'])
        window.location.reload();
        // this.router.navigate(['/login']);
    }
    login(){
        this.router.navigate(['/login']);
    }

    bookList(){
        this.router.navigate(['/book-list']);
    }
}