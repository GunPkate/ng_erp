import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AccountHead, InitialAccountHead } from "../interface/P04Setting/Account/AccountHead";

@Injectable()
export class AccountHeadBehaviorSubj{
    private accountHead :AccountHead = InitialAccountHead.InitialAccountHeadObj();
    private accountHeadList: AccountHead[] = []

    private accountHeadSubject = new BehaviorSubject<AccountHead>(this.accountHead);
    private accountHeadListSubject = new BehaviorSubject<AccountHead[]>(this.accountHeadList);

    getAccountHead(){
        return this.accountHeadSubject;
    }

    setAccountHead(accountHead: AccountHead){
        this.accountHeadSubject.next(accountHead)
    }

    getAccountHeadList(){
        return this.accountHeadListSubject;
    }

    setAccountHeadList(accountHeadList: AccountHead[]){
        this.accountHeadListSubject.next(accountHeadList)
    }
}