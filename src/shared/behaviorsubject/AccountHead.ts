import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AccountHead, InitialAccountHead } from "../interface/P04Setting/Account/AccountHead";

@Injectable()
export class AccountHeadBehaviorSubj{
    private accountHead :AccountHead = InitialAccountHead.InitialAccountHeadObj();
    private accountHeadList: AccountHead[] = []

    private userSubject = new BehaviorSubject<AccountHead>(this.accountHead);
    private userListSubject = new BehaviorSubject<AccountHead[]>(this.accountHeadList);

    getUser(){
        return this.userSubject;
    }

    setUser(accountHead: AccountHead){
        this.userSubject.next(accountHead)
    }

    getUserList(){
        return this.userListSubject;
    }

    setUserList(accountHeadList: AccountHead[]){
        this.userListSubject.next(accountHeadList)
    }
}