import { Injectable } from '@angular/core';
import { Review } from './review';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  reviews: Observable<Review[]>;
  reviewCollection: AngularFirestoreCollection;

  reviewDoc: AngularFirestoreDocument<Review>;

  constructor(public afs: AngularFirestore) { 
    this.reviews = afs.collection('reviews').valueChanges();
    this.reviewCollection = this.afs.collection('reviews');
  }

  getBooks(): Observable<Review[]> {

    console.log(this.reviews);
    return this.reviews;

  }

  addBook(rev: Review) {
    this.reviewCollection.add(rev);
  }
}
