import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { Routes , RouterModule, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { AllproductsComponent } from './allproducts/allproducts.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AllproductsComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
