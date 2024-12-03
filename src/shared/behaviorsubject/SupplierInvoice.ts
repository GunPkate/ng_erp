import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { SupplierInvoice, InitialSupplierInvoice } from "../interface/P03Purchases/Purchase/SupplierInvoice";

@Injectable()
export class SupplierInvoiceBehaviorSubj {
    private supplierInvoiceSubject = new BehaviorSubject<SupplierInvoice>(InitialSupplierInvoice.InitialSupplierInvoiceObj())
    private supplierInvoiceListSubject = new BehaviorSubject<SupplierInvoice[]>([])

    getSupplierInvoice(){
        return this.supplierInvoiceSubject;
    }

    setSupplierInvoice(supplierInvoice: SupplierInvoice){
        this.supplierInvoiceSubject.next(supplierInvoice)
    }

    getSupplierInvoiceList(){
        return this.supplierInvoiceListSubject;
    }

    setSupplierInvoiceList(supplierInvoiceList: SupplierInvoice[]){
        this.supplierInvoiceListSubject.next(supplierInvoiceList)
    }
}