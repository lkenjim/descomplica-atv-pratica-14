import { Product } from '@/app/models';
import { ProductsService } from '@/app/services';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product | null = null;

  constructor(private readonly productsService: ProductsService) {}

  edit() {
    if (!this.product) return;
  }

  delete() {
    if (!this.product) return;

    this.productsService.delete(this.product);
  }
}
