import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Item } from '../models/Item';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  
  // items will be an observable
  items: Observable<Item[]>;

  constructor(public afs: AngularFirestore) { 
    // this.items = this.afs.collection('items').valueChanges();
    this.items = this.afs.collection('items').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getItems(){
    return this.items;
  }

}

