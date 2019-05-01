import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;
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
        private customerService: CustomerService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        // this.router.navigate(['/login']);
    }
    login(){
        this.router.navigate(['/login']);
    }

    bookList(){
        this.router.navigate(['/book-list']);
    }

    // addSample(){
    //     this.customerService.addCustomer(this.cust);
    // }
}