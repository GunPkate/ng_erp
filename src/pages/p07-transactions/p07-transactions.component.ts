import { Component, OnInit } from '@angular/core';
import { AccList } from 'src/shared/interface/P07Transaction/AccList';

@Component({
  selector: 'app-p07-transactions',
  templateUrl: './p07-transactions.component.html',
  styleUrls: ['./p07-transactions.component.css'],
})
export class P07TransactionListComponent implements OnInit {

  constructor() { }

  accList: AccList[] = [
    {acc:"Assets"},
    {acc:"Liabilities"},
    {acc:"Equity"},
    {acc:"Revenues"},
    {acc:"Expenses"}
   ];
  ngOnInit(): void {
  }

}
