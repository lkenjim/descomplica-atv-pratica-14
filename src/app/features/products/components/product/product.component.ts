import { Product } from '@/app/models';
import { ProductsService } from '@/app/services';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product | null = null;

  constructor(
    private readonly productsService: ProductsService,
    private readonly router: Router
  ) { }

  edit() {
    if (!this.product) return;

    this.router.navigate(['products', 'create'], {
      queryParams: {
        productId: this.product.id
      }
    })
  }

  delete() {
    if (!this.product) return;

    this.productsService.delete(this.product);
  }
}
