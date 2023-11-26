import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Product } from '@app/models';

@Injectable()
export class ProductsService {
  private dbPath = '/products';

  productsRef: firebase.default.database.Reference;

  constructor(private db: AngularFireDatabase) {
    this.productsRef = this.db.database.ref(this.dbPath);
  }

  findAll() {
    return this.productsRef.on('value', a => console.log(a.val()));
  }

  create(product: Product): Promise<void> {
    return this.productsRef
      .child(product.id)
      .set(product)
      .catch(err => console.log('Error while creating product', err));
  }
}
