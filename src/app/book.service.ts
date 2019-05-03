import { Injectable } from '@angular/core';
import { Book } from './book';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Observable<Book[]>;
  bookCollection: AngularFirestoreCollection;

  bookDoc: AngularFirestoreDocument<Book>;

  constructor(public afs: AngularFirestore) { 
    this.books = afs.collection('books').valueChanges();
    this.bookCollection = this.afs.collection('books');
  }

  getBooks(): Observable<Book[]> {

    console.log(this.books);
    return this.books;

  }

  addBook(book: Book) {
    this.bookCollection.add(book);
  }
}
