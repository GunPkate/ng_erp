import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CustomerInvoice, InitialCustomerInvoice } from "../interface/P01Sales/Sales/CustomerInvoice";

@Injectable()
export class CustomerInvoiceBehaviorSubj {
    private customerInvoiceSubject = new BehaviorSubject<CustomerInvoice>(InitialCustomerInvoice.InitialCustomerInvoiceObj())
    private customerInvoiceListSubject = new BehaviorSubject<CustomerInvoice[]>([])

    getCustomerInvoice(){
        return this.customerInvoiceSubject;
    }

    setCustomerInvoice(customerInvoice: CustomerInvoice){
        this.customerInvoiceSubject.next(customerInvoice)
    }

    getCustomerInvoiceList(){
        return this.customerInvoiceListSubject;
    }

    setCustomerInvoiceList(customerInvoiceList: CustomerInvoice[]){
        this.customerInvoiceListSubject.next(customerInvoiceList)
    }
}