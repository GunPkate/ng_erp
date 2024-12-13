import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CustomerInvoiceDetail, InitialCustomerInvoiceDetail } from "../interface/P01Sales/Sales/CustomerInvoiceDetails";


@Injectable()
export class CustomerInvoiceDetailBehaviorSubj {
    private customerInvoiceDetailSubject = new BehaviorSubject<CustomerInvoiceDetail>(InitialCustomerInvoiceDetail.InitialCustomerInvoiceDetailObj())
    private customerInvoiceDetailListSubject = new BehaviorSubject<CustomerInvoiceDetail[]>([])

    getCustomerInvoiceDetail(){
        return this.customerInvoiceDetailSubject;
    }

    setCustomerInvoiceDetail(customerInvoiceDetail: CustomerInvoiceDetail){
        this.customerInvoiceDetailSubject.next(customerInvoiceDetail)
    }

    getCustomerInvoiceDetailList(){
        return this.customerInvoiceDetailListSubject;
    }

    setCustomerInvoiceDetailList(customerInvoiceDetailList: CustomerInvoiceDetail[]){
        this.customerInvoiceDetailListSubject.next(customerInvoiceDetailList)
    }
}