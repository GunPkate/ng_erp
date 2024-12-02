import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CustomerBehaviorSubj } from "src/shared/behaviorsubject/Customer";

@Injectable()
export class CustomerService{
    constructor(
        private http: HttpClient,
        private customerBehaviorSubj: CustomerBehaviorSubj
    ){}

    loadCustomer(){
        this.http.get('http://localhost:3000/supplier/all').subscribe( (res:any)=>{
            this.customerBehaviorSubj.setCustomerList(res)
        })
    }
}