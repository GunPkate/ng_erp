import { Component, OnInit } from '@angular/core';
import { AccountFilterBehaviorSubj } from 'src/shared/behaviorsubject/AccountFilter';
import { TransactionBehaviorSubj } from 'src/shared/behaviorsubject/Transaction';
import { AccList } from 'src/shared/interface/P07Transaction/AccList';
import { AccountFilter } from 'src/shared/interface/P07Transaction/AccountFilter';
import { Transaction } from 'src/shared/interface/P07Transaction/Transaction';
import { TransactionService } from 'src/shared/services/S07transactions/S07_Transactions';

@Component({
  selector: 'app-p07-transactions',
  templateUrl: './p07-transactions.component.html',
  styleUrls: ['./p07-transactions.component.css'],
})
export class P07TransactionListComponent implements OnInit {

  accFilter: AccountFilter[] = []
  constructor(
    private transactionService: TransactionService,
    private accountFilterBehaviorSubj: AccountFilterBehaviorSubj
  ) {   }

  TransactionList: Transaction[] = []

  accList: AccList[] = [
    {acc:"Assets", code: "1"},
    {acc:"Liabilities", code: "2"},
    {acc:"Equity", code: "3"},
    {acc:"Revenues", code: "4"},
    {acc:"Expenses", code: "5"}
   ];
  ngOnInit(): void {
  }

  onLoad(event: any) {
    event.accList = this.accList
    this.transactionService.loadAccountFilter()
    this.accountFilterBehaviorSubj.getAccountFilterList().subscribe( (x)=>{
      event.accFilter = x; 
    } 
    )
  }


}
