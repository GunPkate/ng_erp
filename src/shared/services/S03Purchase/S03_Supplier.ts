import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { SupplierBehaviorSubj } from "src/shared/behaviorsubject/Supplier";
import { SupplierInvoiceBehaviorSubj } from "src/shared/behaviorsubject/SupplierInvoice";
import { SupplierInvoiceDetailBehaviorSubj } from "src/shared/behaviorsubject/SupplierInvoiceDetail";
import { SupplierPaymentBehaviorSubj } from "src/shared/behaviorsubject/SupplierInvoicePayment";
import Swal from "sweetalert2";

@Injectable()
export class SupplierService{
    constructor(
        private http: HttpClient,
        private supplierBehaviorSubj: SupplierBehaviorSubj,
        private supplierInvoiceBehaviorSubj: SupplierInvoiceBehaviorSubj,
        private supplierInvoiceDetailBehaviorSubj: SupplierInvoiceDetailBehaviorSubj,
        private supplierPaymentBehaviorSubj: SupplierPaymentBehaviorSubj
    ){}

    loadSupplier(){
        this.http.get('http://localhost:3000/supplier/all').pipe(catchError(error => throwError(error))).subscribe( (res:any)=>{
            this.supplierBehaviorSubj.setSupplierList(res)
        },
        error => {
            if(error.error.meta){
                Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
            }else{
                Swal.fire(JSON.stringify(error.name),error.message,'error')
            }
        })
    }

    loadSupplierInvoice(){
        this.http.get('http://localhost:3000/supplierinvoice/all').pipe(catchError(error => throwError(error))).subscribe( (res:any)=>{
            this.supplierInvoiceBehaviorSubj.setSupplierInvoiceList(res)
        },
        error => {
            if(error.error.meta){
                Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
            }else{
                Swal.fire(JSON.stringify(error.name),error.message,'error')
            }
        })
    }

    loadSupplierInvoiceDetail(invoiceNo: string){
        this.http.get('http://localhost:3000/supplierinvoicedetail/all:'+invoiceNo).pipe(catchError(error => throwError(error))).subscribe( (res:any)=>{
            this.supplierInvoiceDetailBehaviorSubj.setSupplierInvoiceDetailList(res)
        },
        error => {
            if(error.error.meta){
                Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
            }else{
                Swal.fire(JSON.stringify(error.name),error.message,'error')
            }
        })
    }

    loadSupplierInvoicePayment(invoiceNo: string){
        this.http.get('http://localhost:3000/supplierpayment/all:'+invoiceNo).pipe(catchError(error => throwError(error))).subscribe( (res:any)=>{
            this.supplierPaymentBehaviorSubj.setSupplierPaymentList(res)
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