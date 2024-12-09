import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SupplierBehaviorSubj } from "src/shared/behaviorsubject/Supplier";
import { SupplierInvoiceBehaviorSubj } from "src/shared/behaviorsubject/SupplierInvoice";
import { SupplierInvoiceDetailBehaviorSubj } from "src/shared/behaviorsubject/SupplierInvoiceDetail";
import { SupplierPaymentBehaviorSubj } from "src/shared/behaviorsubject/SupplierInvoicePayment";

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
        this.http.get('http://localhost:3000/supplier/all').subscribe( (res:any)=>{
            this.supplierBehaviorSubj.setSupplierList(res)
        })
    }

    loadSupplierInvoice(){
        this.http.get('http://localhost:3000/supplierinvoice/all').subscribe( (res:any)=>{
            this.supplierInvoiceBehaviorSubj.setSupplierInvoiceList(res)
        })
    }

    loadSupplierInvoiceDetail(invoiceNo: string){
        this.http.get('http://localhost:3000/supplierinvoicedetail/all:'+invoiceNo).subscribe( (res:any)=>{
            this.supplierInvoiceDetailBehaviorSubj.setSupplierInvoiceDetailList(res)
        })
    }

    loadSupplierInvoicePayment(invoiceNo: string){
        this.http.get('http://localhost:3000/supplierpayment/all:'+invoiceNo).subscribe( (res:any)=>{
            this.supplierPaymentBehaviorSubj.setSupplierPaymentList(res)
        })
    }
}