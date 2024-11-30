import { Injectable } from "@angular/core";
import { InitialSupplier, Supplier } from "../interface/P03Purchases/Supplier/Supplier";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class SupplierBehaviorSubj {
    private supplierSubject = new BehaviorSubject<Supplier>(InitialSupplier.InitialSupplierObj())
    private supplierListSubject = new BehaviorSubject<Supplier[]>([])

    getSupplier(){
        return this.supplierSubject;
    }

    setSupplier(supplier: Supplier){
        this.supplierSubject.next(supplier)
    }

    getSupplierList(){
        return this.supplierListSubject;
    }

    setSupplierList(supplierList: Supplier[]){
        this.supplierListSubject.next(supplierList)
    }
}