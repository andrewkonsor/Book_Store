import { Injectable } from '@angular/core';
import { Customer } from './customer';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Observable<Customer[]>;
  customerCollection: AngularFirestoreCollection;

  customerDoc: AngularFirestoreDocument<Customer>;

  constructor(public afs: AngularFirestore) { 
    this.customers = afs.collection('customers').valueChanges();
    this.customerCollection = this.afs.collection('customers');
  }

  addCustomer(cust: Customer) {
    this.customerCollection.add(cust);
  }
}
