import { NgModule } from '@angular/core';
import { ButtonMenuComponent } from 'src/components/button-menu/button-menu.component';
import { P05StockComponent } from './p05-stock.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Form05StockComponent } from 'src/form/p05-stock/form-lv1stock/form05-stock.component';
import { Form05ProductComponent } from 'src/form/p05-stock/form-lv1product/form05-product.component';
import { RouterModule, Routes } from '@angular/router';
import { Form05CategoryComponent } from 'src/form/p05-stock/form-lv1category/form05-category.component';
import { StockService } from 'src/shared/services/S05Stocks/S05_Category';
import { CategoryBehaviorSubj } from 'src/shared/behaviorsubject/Category';
import { StockBehaviorSubj } from 'src/shared/behaviorsubject/Stock';
import { ProductBehaviorSubj } from 'src/shared/behaviorsubject/Product';
import { Form05LowStockComponent } from 'src/form/p05-stock/form-lv1lowstock/form05-low-stock.component';
import { NgChartsModule } from 'ng2-charts';

export const p05routes: Routes = [
  { 
    path: '', 
    component:  P05StockComponent,
    children: [
      {path: 'categories', component: Form05CategoryComponent},
      {path: 'products', component: Form05ProductComponent},
      {path: 'stockdetails', component: Form05StockComponent},
      {path: 'lowstock', component: Form05LowStockComponent},
    ]
  }
]

@NgModule({
  declarations: [
    P05StockComponent
  ],
  imports: [
    ButtonMenuComponent,
    Form05ProductComponent,
    Form05StockComponent,
    RouterModule.forChild(p05routes),

    NgChartsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    StockService, CategoryBehaviorSubj, ProductBehaviorSubj 
    ,StockBehaviorSubj
   ],

})
export class P05StockModule { }
