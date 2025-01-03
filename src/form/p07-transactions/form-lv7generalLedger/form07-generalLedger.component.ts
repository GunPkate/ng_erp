import { Component, Input, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule  } from '@angular/material/table';
import { MatSortModule  } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { DateFormatPipe } from "../../../shared/services/Pipe/DatePipte";
import { DraggableGeneralLedger } from "../../../components/draggable-general-ledger/draggable-general-ledger.component";
import { AccList } from 'src/shared/interface/P07Transaction/AccList';
import { TransactionService } from 'src/shared/services/S07transactions/S07_Transactions';
import { GeneralLedger, InitialTableLedger, tableLedger, valueDetail } from 'src/shared/interface/P07Transaction/GeneralLedger';
import { GeneralLedgerBehaviorSubj } from 'src/shared/behaviorsubject/GeneralLedger';
import Swal from 'sweetalert2';
import { AccountFilter } from 'src/shared/interface/P07Transaction/AccountFilter';
import { TransactionBehaviorSubj } from 'src/shared/behaviorsubject/Transaction';


@Component({
  selector: 'app-form07-generalLedger',
  templateUrl: './form07-generalLedger.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, NgFor, DateFormatPipe, DraggableGeneralLedger],
  styleUrls: ['./form07-generalLedger.component.css']
})

export class Form07GeneralLedgerComponent implements OnInit {


  @Input() accList:AccList[] = []
  @Input() accFilter:AccountFilter[] = []
  title07 = 'General Ledger List'

  constructor(
    private http: HttpClient,
    private transactionService: TransactionService,
    private generalLedgerBehaviorSubj: GeneralLedgerBehaviorSubj,
    private transactionBehaviorSubj: TransactionBehaviorSubj
  ) {  
  }
  ngOnInit(): void {

  }

  tableLedger: tableLedger[] = []
  ledger: GeneralLedger[] = []

  loadTransaction(){
    this.transactionService.loadTransaction()
    this.transactionBehaviorSubj.getTransactionList().subscribe(x=>{
      // this.dataSourceT = x
      console.log(x)
    })    
  }

  setAcc(data: string){
    console.log("Acc",data)
    if(data !== ''){
      this.transactionService.loadGeneralLedger(data)
      this.generalLedgerBehaviorSubj.getGeneralLedgerList().subscribe(
        res=>{
          this.tableLedger = []
          let uniqueAcc = [...new Set(res.map(y => y.controlcode+" "+y.accountcontrolname))]

          if(uniqueAcc){
            
            for (let i = 0; i < uniqueAcc.length; i++) {
              let item = InitialTableLedger.InitialTableLedger()
              let [first,...temp] = uniqueAcc[i].split(" ")
              let temp2 = temp.join(" ")
              item.accountcontrolname = temp2
              item.controlcode = first
              this.tableLedger.push(item) ;
            }
          }

          console.log(this.tableLedger)
          res.forEach( x => {
            for (let y = 0; y < this.tableLedger.length; y++) {
              if(this.tableLedger[y].controlcode == x.controlcode){
                if(x.debit >= 0 && x.credit==0 ){
                  let debit: valueDetail = { date: x.date, value: x.debit}
                  this.tableLedger[y].debit.push(debit)
                }else if(x.debit == 0 && x.credit >= 0){
                  let credit: valueDetail = { date: x.date, value: x.credit}
                  this.tableLedger[y].credit.push(credit)
                }
              }
              
            }
            // item.accountcontrolname =>
          })
        } 
          
        ,
        error=>{Swal.fire('Error','Error','error')}
      )
    }else{
      this.tableLedger = []
    }
  }
}

