import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductCreateEditComponent } from './product-create-edit/product-create-edit.component';

import { ProductService } from './shared/product.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDeleteComponent,
    ProductCreateEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
