import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonMenuComponent } from 'src/components/button-menu/button-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { P03PurchaseComponent } from './p03-purchase.component';
import { Form03Lv1Component } from 'src/form/p03-purchase/form-lv1/form03-lv1.component';

@NgModule({
  declarations: [
    P03PurchaseComponent
  ],
  imports: [
    BrowserModule,
    ButtonMenuComponent,
    BrowserAnimationsModule,
    Form03Lv1Component,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],

})
export class P03PurchaseModule { }
