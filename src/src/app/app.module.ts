import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { Routes , RouterModule, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProductsModule } from './products/products.module'

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CartsModule } from './carts/carts.module';
import { FormsModule } from '@angular/forms'
import { ErrorComponent } from './shared/components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    AppRoutingModule,
    ProductsModule,
    CartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
