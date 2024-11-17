import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonMenuComponent } from 'src/components/button-menu/button-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { P05StockComponent } from './p05-stock.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormLv1Component as Form05Lv1Component } from 'src/form/p05-stock/form-lv1/form05-lv1.component';

@NgModule({
  declarations: [
    P05StockComponent
  ],
  imports: [
    BrowserModule,
    ButtonMenuComponent,
    BrowserAnimationsModule,
    Form05Lv1Component,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],

})
export class P05StockModule { }
