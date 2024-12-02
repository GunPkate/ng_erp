import { NgModule } from '@angular/core';
import { ButtonMenuComponent } from 'src/components/button-menu/button-menu.component';
import { P05StockComponent } from './p05-stock.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormLv1Component  } from 'src/form/p05-stock/form-lv1/form05-lv1.component';
import { RouterModule, Routes } from '@angular/router';
import { Form05CategoryComponent } from 'src/form/p05-stock/form-lv1category/form05-category.component';
import { StockService } from 'src/shared/services/S05Stocks/S05_Category';
import { CategoryBehaviorSubj } from 'src/shared/behaviorsubject/Category';

export const p05routes: Routes = [
  { 
    path: '', 
    component:  P05StockComponent,
    children: [
      {path: 'categories', component: Form05CategoryComponent},
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
  providers: [
    StockService, CategoryBehaviorSubj
   ],

})
export class P05StockModule { }
