import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { SupplierPayment, InitialSupplierPayment } from "../interface/P03Purchases/Purchase/SupplierPayment";

@Injectable()
export class SupplierPaymentBehaviorSubj {
    private supplierDetailSubject = new BehaviorSubject<SupplierPayment>(InitialSupplierPayment.InitialSupplierPaymentObj())
    private supplierDetailListSubject = new BehaviorSubject<SupplierPayment[]>([])

    getSupplierPayment(){
        return this.supplierDetailSubject;
    }

    setSupplierPayment(supplierDetail: SupplierPayment){
        this.supplierDetailSubject.next(supplierDetail)
    }

    getSupplierPaymentList(){
        return this.supplierDetailListSubject;
    }

    setSupplierPaymentList(supplierDetailList: SupplierPayment[]){
        this.supplierDetailListSubject.next(supplierDetailList)
    }
}