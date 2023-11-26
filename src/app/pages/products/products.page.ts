import { Product } from '@/app/models';
import { ProductsService } from '@/app/services';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: 'products.page.html',
  styleUrls: ['products.page.scss'],
})
export class ProductsPage {
  form: FormGroup = this.formBuilder.group({
    name: [''],
    description: [''],
    price: [''],
  })

  constructor(
    private readonly productsService: ProductsService,
    private readonly formBuilder: FormBuilder,
  ) {}

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

    await this.productsService.create(product);

    this.form.reset();
  }
}
