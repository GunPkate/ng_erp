import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CustomerBehaviorSubj } from "src/shared/behaviorsubject/Customer";
import { catchError, throwError } from 'rxjs';
import Swal from "sweetalert2";
import { CustomerInvoiceBehaviorSubj } from "src/shared/behaviorsubject/CustomerInvoice";
import { CustomerInvoiceDetailBehaviorSubj } from "src/shared/behaviorsubject/CustomerInvoiceDetail";
import { CustomerPaymentBehaviorSubj } from "src/shared/behaviorsubject/CustomerInvoicePayment";

@Injectable()
export class CustomerService{
    constructor(
        private http: HttpClient,
        private customerBehaviorSubj: CustomerBehaviorSubj,
        private customerInvoiceBehaviorSubj: CustomerInvoiceBehaviorSubj,
        private customerInvoiceDetailBehaviorSubj: CustomerInvoiceDetailBehaviorSubj,
        private customerPaymentBehaviorSubj: CustomerPaymentBehaviorSubj
    ){}

    loadCustomer(){
        this.http.get('http://localhost:3000/customer/all').pipe(catchError(error => throwError(error))).subscribe(
        (res:any)=>{
            this.customerBehaviorSubj.setCustomerList(res)
        },
        error => {
            if(error.error.meta){
                Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
            }else{
                Swal.fire(JSON.stringify(error.name),error.message,'error')
            }
        }
    )
    }

    loadCustomerInvoice(){
        this.http.get('http://localhost:3000/customerinvoice/all').pipe(catchError(error => throwError(error))).subscribe( (res:any)=>{
            this.customerInvoiceBehaviorSubj.setCustomerInvoiceList(res)
        },
        error => {
            if(error.error.meta){
                Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
            }else{
                Swal.fire(JSON.stringify(error.name),error.message,'error')
            }
        })
    }

    loadCustomerInvoiceDetail(invoiceNo: string){
        this.http.get('http://localhost:3000/customerinvoicedetail/all:'+invoiceNo).pipe(catchError(error => throwError(error))).subscribe( (res:any)=>{
            this.customerInvoiceDetailBehaviorSubj.setCustomerInvoiceDetailList(res)
        },
        error => {
            if(error.error.meta){
                Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
            }else{
                Swal.fire(JSON.stringify(error.name),error.message,'error')
            }
        })
    }

    loadCustomerInvoicePayment(invoiceNo: string){
        this.http.get('http://localhost:3000/customerpayment/all:'+invoiceNo).pipe(catchError(error => throwError(error))).subscribe( (res:any)=>{
            this.customerPaymentBehaviorSubj.setCustomerPaymentList(res)
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