import { NgModule } from '@angular/core';
import { ButtonMenuComponent } from 'src/components/button-menu/button-menu.component';
import { P05StockComponent } from './p05-stock.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormLv1Component  } from 'src/form/p05-stock/form-lv1/form05-lv1.component';
import { RouterModule, Routes } from '@angular/router';

export const p05routes: Routes = [
  { 
    path: '', 
    component:  P05StockComponent,
    children: [
      {path: 'categories', component: FormLv1Component},
      {path: 'products', component: FormLv1Component},
    ]
  }
]

@NgModule({
  declarations: [
    P05StockComponent
  ],
  imports: [
    ButtonMenuComponent,
    FormLv1Component,
    RouterModule.forChild(p05routes),

    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],

})
export class P05StockModule { }
