import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CustomerBehaviorSubj } from "src/shared/behaviorsubject/Customer";
import { catchError, throwError } from 'rxjs';
import Swal from "sweetalert2";

@Injectable()
export class CustomerService{
    constructor(
        private http: HttpClient,
        private customerBehaviorSubj: CustomerBehaviorSubj
    ){}

    loadCustomer(){
        this.http.get('http://localhost:3000/customer/all').pipe(catchError(error => throwError(error))).subscribe(
        (res:any)=>{
            this.customerBehaviorSubj.setCustomerList(res)
        },
        error => {
            Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
        }
    )
    }
}