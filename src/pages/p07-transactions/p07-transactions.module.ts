import { NgModule } from '@angular/core';
import { ButtonMenuComponent } from 'src/components/button-menu/button-menu.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { P07TransactionListComponent } from './p07-transactions.component';
import { Form07TransactionListComponent } from 'src/form/p07-transactions/form-lv7transactionList/form07-transactionList.component';
import { TransactionBehaviorSubj } from 'src/shared/behaviorsubject/Transaction';
import { TransactionService } from 'src/shared/services/S07transactions/S07_Transactions';
import { Draggable } from 'src/components/draggable/draggable.component';
import { AccountFilterBehaviorSubj } from 'src/shared/behaviorsubject/AccountFilter';

export const p07routes: Routes = [
  { 
    path: '', 
    component:  P07TransactionListComponent,
    children: [
      {path: 'transactionlist', component: Form07TransactionListComponent},
    ]
  }
]

@NgModule({
  declarations: [
    P07TransactionListComponent
  ],
  imports: [
    ButtonMenuComponent,
    RouterModule.forChild(p07routes),
    Draggable,

    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    TransactionService, TransactionBehaviorSubj, AccountFilterBehaviorSubj
   ],

})
export class P07TransactionsModule { }
