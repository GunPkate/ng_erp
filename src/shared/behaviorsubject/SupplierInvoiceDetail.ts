import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { SupplierInvoiceDetail, InitialSupplierInvoiceDetail } from "../interface/P03Purchases/Purchase/SupplierInvoiceDetail";

@Injectable()
export class SupplierInvoiceDetailBehaviorSubj {
    private supplierInvoiceDetailSubject = new BehaviorSubject<SupplierInvoiceDetail>(InitialSupplierInvoiceDetail.InitialSupplierInvoiceDetailObj())
    private supplierInvoiceDetailListSubject = new BehaviorSubject<SupplierInvoiceDetail[]>([])

    getSupplierInvoiceDetail(){
        return this.supplierInvoiceDetailSubject;
    }

    setSupplierInvoiceDetail(supplierInvoiceDetail: SupplierInvoiceDetail){
        this.supplierInvoiceDetailSubject.next(supplierInvoiceDetail)
    }

    getSupplierInvoiceDetailList(){
        return this.supplierInvoiceDetailListSubject;
    }

    setSupplierInvoiceDetailList(supplierInvoiceDetailList: SupplierInvoiceDetail[]){
        this.supplierInvoiceDetailListSubject.next(supplierInvoiceDetailList)
    }
}