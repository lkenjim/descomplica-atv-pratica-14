import { Product } from '@/app/models';
import { ProductsService } from '@/app/services';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-creation-page',
  templateUrl: './products-creation.page.html',
})
export class ProductsCreationPageComponent {
  form: FormGroup = this.formBuilder.group({
    name: [''],
    description: [''],
    price: [''],
  });
  productBeingEdited: Product | null = null;

  constructor(
    private readonly productsService: ProductsService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
  ) {
    const productId = this.router
      .parseUrl(this.router.url)
      .queryParams['productId'];

    if (productId) {
      this.loadProductEdition(productId);
    }
  }

  async submit() {
    if (this.form.invalid) {
      alert('Fill the fields correctly');
      return;
    }

    const {
      name: { value: productName },
      description: { value: productDescription },
      price: { value: productPrice },
    } = this.form.controls;

    if (Number.isNaN(+productPrice)) {
      alert('Insert a valid price');
      return;
    }

    const product = Product.create(
      productName,
      productDescription,
      productPrice
    )

    if (this.productBeingEdited) {
      product.id = this.productBeingEdited.id;
    }

    await this.productsService.upsert(product);

    this.form.reset();
  }

  async loadProductEdition(productId: string) {
    this.productsService.findAll((products: Record<string, Product>) => {
      this.productBeingEdited = products[productId] || null;

      this.form.controls['name'].setValue(this.productBeingEdited?.name || '');
      this.form.controls['description'].setValue(this.productBeingEdited?.description || '');
      this.form.controls['price'].setValue(this.productBeingEdited?.price || '');
    });
  }
}
