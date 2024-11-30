import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SupplierBehaviorSubj } from "src/shared/behaviorsubject/Supplier";

@Injectable()
export class SupplierService{
    constructor(
        private http: HttpClient,
        private supplierBehaviorSubj: SupplierBehaviorSubj
    ){}

    loadSupplier(){
        this.http.get('http://localhost:3000/supplier/all').subscribe( (res:any)=>{
            this.supplierBehaviorSubj.setSupplierList(res)
        })
    }
}