import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonMenuComponent } from 'src/components/button-menu/button-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { P05StockComponent } from './p05-stock.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormLv1Component } from 'src/components/form-lv1/form-lv1.component';

@NgModule({
  declarations: [
    P05StockComponent
  ],
  imports: [
    BrowserModule,
    ButtonMenuComponent,
    BrowserAnimationsModule,
    FormLv1Component,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],

})
export class P05StockModule { }
