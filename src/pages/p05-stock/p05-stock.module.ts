import { NgModule } from '@angular/core';
import { ButtonMenuComponent } from 'src/components/button-menu/button-menu.component';
import { P05StockComponent } from './p05-stock.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormProductComponent  } from 'src/form/p05-stock/form-lv1product/form05-product.component';
import { RouterModule, Routes } from '@angular/router';
import { Form05CategoryComponent } from 'src/form/p05-stock/form-lv1category/form05-category.component';
import { StockService } from 'src/shared/services/S05Stocks/S05_Category';
import { CategoryBehaviorSubj } from 'src/shared/behaviorsubject/Category';
import { ProductBehaviorSubj } from 'src/shared/behaviorsubject/Product';

export const p05routes: Routes = [
  { 
    path: '', 
    component:  P05StockComponent,
    children: [
      {path: 'categories', component: Form05CategoryComponent},
      {path: 'products', component: FormProductComponent},
    ]
  }
]

@NgModule({
  declarations: [
    P05StockComponent
  ],
  imports: [
    ButtonMenuComponent,
    FormProductComponent,
    RouterModule.forChild(p05routes),

    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    StockService, CategoryBehaviorSubj
    ,ProductBehaviorSubj
   ],

})
export class P05StockModule { }
