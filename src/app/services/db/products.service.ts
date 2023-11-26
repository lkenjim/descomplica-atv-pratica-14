import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Database, getDatabase } from 'firebase/database';
import { environment } from '@/environments/environment';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Product } from '@app/models';

@Injectable()
export class ProductsService {
  private dbPath = '/products';

  productsRef: AngularFireList<Product>;

  constructor(private db: AngularFireDatabase) {
    this.productsRef = db.list(this.dbPath);
  }

  findAll(): AngularFireList<Product> {
    return this.productsRef;
  }

  create(product: Product) {
    this.productsRef.push(product).catch(err => console.log('Error while creating product', err));
  }
}
