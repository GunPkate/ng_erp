import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SupplierBehaviorSubj } from "src/shared/behaviorsubject/Supplier";
import { SupplierInvoiceBehaviorSubj } from "src/shared/behaviorsubject/SupplierInvoice";

@Injectable()
export class SupplierService{
    constructor(
        private http: HttpClient,
        private supplierBehaviorSubj: SupplierBehaviorSubj,
        private supplierInvoiceBehaviorSubj: SupplierInvoiceBehaviorSubj
    ){}

    loadSupplier(){
        this.http.get('http://localhost:3000/supplier/all').subscribe( (res:any)=>{
            this.supplierBehaviorSubj.setSupplierList(res)
        })
    }

    loadSupplierInvoice(){
        this.http.get('http://localhost:3000/supplier/all').subscribe( (res:any)=>{
            this.supplierInvoiceBehaviorSubj.setSupplierInvoiceList(res)
        })
    }
}