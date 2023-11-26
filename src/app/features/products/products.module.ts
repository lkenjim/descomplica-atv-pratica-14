import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products.component';
import { ProductsPageRoutingModule } from './products-routing.module';
import { ProductsService } from '@/app/services';
import { ProductsCreationPageComponent, ProductsListPageComponent } from './pages';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProductsPageRoutingModule
  ],
  declarations: [
    ProductsComponent,
    ProductsCreationPageComponent,
    ProductsListPageComponent
  ],
  providers: [ProductsService]
})
export class ProductsPageModule {}
