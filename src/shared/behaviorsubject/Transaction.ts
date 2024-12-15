import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Transaction, InitialTransaction } from "../interface/P07Transaction/Transaction";

@Injectable()
export class TransactionBehaviorSubj {
    private transactionSubject = new BehaviorSubject<Transaction>(InitialTransaction.InitialTransactionObj())
    private transactionListSubject = new BehaviorSubject<Transaction[]>([])

    getTransaction(){
        return this.transactionSubject;
    }

    setTransaction(supplierDetail: Transaction){
        this.transactionSubject.next(supplierDetail)
    }

    getTransactionList(){
        return this.transactionListSubject;
    }

    setTransactionList(supplierDetailList: Transaction[]){
        this.transactionListSubject.next(supplierDetailList)
    }
}