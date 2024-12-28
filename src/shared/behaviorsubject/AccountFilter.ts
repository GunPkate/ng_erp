import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AccountFilter, InitialAccountFilter } from "../interface/P07Transaction/AccountFilter";

@Injectable()
export class AccountFilterBehaviorSubj{
    private accountFilter :AccountFilter = InitialAccountFilter.InitialAccountFilterObj();
    private accountFilterList: AccountFilter[] = []

    private accountFilterSubject = new BehaviorSubject<AccountFilter>(this.accountFilter);
    private accountFilterListSubject = new BehaviorSubject<AccountFilter[]>(this.accountFilterList);

    getAccountFilter(){
        return this.accountFilterSubject;
    }

    setAccountFilter(accountFilter: AccountFilter){
        this.accountFilterSubject.next(accountFilter)
    }

    getAccountFilterList(){
        return this.accountFilterListSubject;
    }

    setAccountFilterList(accountFilterList: AccountFilter[]){
        this.accountFilterListSubject.next(accountFilterList)
    }
}