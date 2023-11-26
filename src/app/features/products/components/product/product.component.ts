import { Product } from "@/app/models";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product | null = null;

  constructor() {
    console.log(this.product)
  }
}
