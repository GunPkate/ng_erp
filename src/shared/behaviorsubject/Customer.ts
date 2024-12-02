import { Injectable } from "@angular/core";
import { InitialCustomer, Customer } from "../interface/P03Purchases/Customer/Customer";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class CustomerBehaviorSubj {
    private CustomerSubject = new BehaviorSubject<Customer>(InitialCustomer.InitialCustomerObj())
    private CustomerListSubject = new BehaviorSubject<Customer[]>([])

    getCustomer(){
        return this.CustomerSubject;
    }

    setCustomer(Customer: Customer){
        this.CustomerSubject.next(Customer)
    }

    getCustomerList(){
        return this.CustomerListSubject;
    }

    setCustomerList(CustomerList: Customer[]){
        this.CustomerListSubject.next(CustomerList)
    }
}