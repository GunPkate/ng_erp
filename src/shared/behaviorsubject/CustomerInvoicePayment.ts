import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CustomerPayment, InitialCustomerPayment } from "../interface/P01Sales/Sales/CustomerPayment";


@Injectable()
export class CustomerPaymentBehaviorSubj {
    private customerDetailSubject = new BehaviorSubject<CustomerPayment>(InitialCustomerPayment.InitialCustomerPaymentObj())
    private customerDetailListSubject = new BehaviorSubject<CustomerPayment[]>([])

    getCustomerPayment(){
        return this.customerDetailSubject;
    }

    setCustomerPayment(customerDetail: CustomerPayment){
        this.customerDetailSubject.next(customerDetail)
    }

    getCustomerPaymentList(){
        return this.customerDetailListSubject;
    }

    setCustomerPaymentList(customerDetailList: CustomerPayment[]){
        this.customerDetailListSubject.next(customerDetailList)
    }
}