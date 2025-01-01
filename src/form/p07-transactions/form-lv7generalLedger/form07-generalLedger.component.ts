import { Component, Input, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule  } from '@angular/material/table';
import { MatSortModule  } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { DateFormatPipe } from "../../../shared/services/Pipe/DatePipte";
import { DraggableGeneralLedger } from "../../../components/draggable-general-ledger/draggable-general-ledger.component";
import { AccList } from 'src/shared/interface/P07Transaction/AccList';
import { TransactionService } from 'src/shared/services/S07transactions/S07_Transactions';


@Component({
  selector: 'app-form07-generalLedger',
  templateUrl: './form07-generalLedger.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, NgIf, DateFormatPipe, DraggableGeneralLedger],
  styleUrls: ['./form07-generalLedger.component.css']
})

export class Form07GeneralLedgerComponent implements OnInit {


  @Input() accList:AccList[] = []
  title07 = 'Transaction List'

 

  displayedColumns: string[] = [ 'supplierId',  'invoiceNo', 'title', 'totalAmount', 'date', 'description', 'userId', 'action'];
  displayedColumnsT: string[] = [ 'transaction_date', 'accountControlCode',  'invoiceNo', 'transaction_title',  'description', 'debit',  'credit', ];
  



  displayedColumnsDetails: string[] = [ 'id', 'productId', 'purchaseQty', 'purchaseUnitPrice'];
  displayedColumnsPayment: string[] = [ 'paymentId', 'supplierId', 'supplierInvoiceNo', 'invoiceNo', 'totalAmount', 'paymentAmount', 'remainBalance', 'date', 'userId', 'action']; 

  validate: string[] = []

  constructor(
    private http: HttpClient,
    private transactionService: TransactionService
  ) {  }
  ngOnInit(): void {
    console.log(this.accList)
  }

  setAcc(data: string){
    console.log("Acc",data)
    this.transactionService.loadGeneralLedger('1')
  }
}