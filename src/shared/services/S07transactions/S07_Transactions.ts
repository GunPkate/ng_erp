import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TransactionBehaviorSubj } from "src/shared/behaviorsubject/Transaction";
import Swal from "sweetalert2";

@Injectable()
export class TransactionService{
    constructor(
        private http: HttpClient,
        private transactionBehaviorSubj: TransactionBehaviorSubj,
    ){}

    loadTransaction(){
        this.http.get('http://localhost:3000/transaction/all').subscribe( (res:any)=>{
            this.transactionBehaviorSubj.setTransactionList(res)
        },
        error => {
            if(error.error.meta){
                Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
            }else{
                Swal.fire(JSON.stringify(error.name),error.message,'error')
            }
        })
    }

   
}