import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/_models';
import { UserService, AuthenticationService } from 'src/app/_services';
import { BookService } from '../book.service';
import { Book } from '../book';
import { BinaryOperator } from '@angular/compiler';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    books: Book[] = [];
    genres: string[];

    Biography_Books: Book[] = [];
    Fantasy_Books: Book[] = [];
    Horror_Books: Book[] = [];
    Children_Books: Book[] = [];

    constructor(
        private authenticationService: AuthenticationService,
        private bookService: BookService,
        private userService: UserService,
        private cookie: CookieService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });

        this.genres = ["Biography", "Fantasy", "Horror", "Children"];

        this.bookService.getBooks()
        .subscribe(data => {this.books = data;
            for(let x of this.books){
                if(x.Genre == "Biography")
                    this.Biography_Books.push(x);
                else if(x.Genre == "Children")
                    this.Children_Books.push(x);
                else if(x.Genre == "Fantasy")
                    this.Fantasy_Books.push(x);
                else if(x.Genre == "Horror")
                    this.Horror_Books.push(x);
            }
            console.log(data);
        });

    }

    ngOnInit() {
        //this.loadAllUsers();
        if(this.currentUser){
            this.cookie.set("user", this.currentUser.id.toString());
        } else {
            this.cookie.set("user", "none");
        }

        //get books to use in genre card
        console.log(this.books);
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    getUser(){
        return this.currentUser;
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }
}