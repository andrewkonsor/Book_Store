import { Injectable } from '@angular/core';
import { Book } from './book';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { ShoppingCartBookCardComponent } from './shopping-cart-book-card/shopping-cart-book-card.component';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Observable<Book[]>;
  bookCollection: AngularFirestoreCollection;

  bookDoc: AngularFirestoreDocument<Book>;
  shopBooks: Book[] = [];

  constructor(public afs: AngularFirestore, private cookie: CookieService) { 
    //this.books = afs.collection('books').valueChanges();
    this.books = this.afs.collection('books').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Book;
        data.id = a.payload.doc.id;
        return data; 
      })
    });

    this.bookCollection = this.afs.collection('books');
  }

  getBooks(): Observable<Book[]> {

    console.log(this.books);
    return this.books;

  }

  addBook(book: Book) {
    this.bookCollection.add(book);
  }

  removeBook(book: Book){
    this.bookDoc = this.afs.doc(`books/${book.id}`);
    this.bookDoc.delete();
  }

  removeBookCart(book: Book){
    //this.shopBooks = this.shopBooks.filter(obj => obj !== book);
    this.shopBooks.pop();
  }

  addToCart(book: Book){
    //this.shopBooks.push(book);
    this.shopBooks.push(book);
    console.log(this.shopBooks);
  }


}
