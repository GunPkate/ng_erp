import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AccountFilterBehaviorSubj } from "src/shared/behaviorsubject/AccountFilter";
import { TransactionBehaviorSubj } from "src/shared/behaviorsubject/Transaction";
import Swal from "sweetalert2";

@Injectable()
export class TransactionService{
    constructor(
        private http: HttpClient,
        private transactionBehaviorSubj: TransactionBehaviorSubj,
        private accountFilterBehaviorSubj: AccountFilterBehaviorSubj
    ){}
    title:string = "Transaction Service" 

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

    loadAccountFilter(){
        this.http.get('http://localhost:3000/account/acchead/filter').subscribe((res: any)=> {
            console.log(this.title,res)
            this.accountFilterBehaviorSubj.setAccountFilterList(res)
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