import { NgModule } from '@angular/core';
import { ButtonMenuComponent } from 'src/components/button-menu/button-menu.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormProductComponent  } from 'src/form/p05-stock/form-lv1product/form05-product.component';
import { RouterModule, Routes } from '@angular/router';
import { StockService } from 'src/shared/services/S05Stocks/S05_Category';
import { CategoryBehaviorSubj } from 'src/shared/behaviorsubject/Category';
import { ProductBehaviorSubj } from 'src/shared/behaviorsubject/Product';
import { P07TransactionListComponent } from './p07-transactions.component';
import { Form07TransactionListComponent } from 'src/form/p07-transactions/form-lv7transactionList/form07-transactionList.component';
import { TransactionBehaviorSubj } from 'src/shared/behaviorsubject/Transaction';
import { TransactionService } from 'src/shared/services/S07transactions/S07_Transactions';

export const p07routes: Routes = [
  { 
    path: '', 
    component:  P07TransactionListComponent,
    children: [
      {path: 'transactionlist', component: Form07TransactionListComponent},
      {path: 'products', component: FormProductComponent},
    ]
  }
]

@NgModule({
  declarations: [
    P07TransactionListComponent
  ],
  imports: [
    ButtonMenuComponent,
    FormProductComponent,
    RouterModule.forChild(p07routes),

    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    TransactionService, TransactionBehaviorSubj 
   ],

})
export class P07TransactionsModule { }
