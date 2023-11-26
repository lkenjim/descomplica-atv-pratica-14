import { Product } from "@/app/models";
import { ProductsService } from "@/app/services";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-products-list-page',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss']
})
export class ProductsListPageComponent {
  products: Product[] = [];
  loading = true;

  constructor(private readonly productsService: ProductsService) {
    this.productsService.findAll(this.getProducts.bind(this));
  }

  getProducts(products: Record<string, Product>): void {
    this.products = Object.values(products);
    this.loading = false;

    console.log(this.products);

  }
}
