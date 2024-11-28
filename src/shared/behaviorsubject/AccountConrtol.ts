import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AccountControl, InitialAccountControl } from "../interface/P04Setting/Account/AccountControl";

@Injectable()
export class AccountControlBehaviorSubj{
    private accountControl :AccountControl = InitialAccountControl.InitialAccountControlObj();
    private accountControlList: AccountControl[] = []

    private accountControlSubject = new BehaviorSubject<AccountControl>(this.accountControl);
    private accountControlListSubject = new BehaviorSubject<AccountControl[]>(this.accountControlList);

    getAccountControl(){
        return this.accountControlSubject;
    }

    setAccountControl(accountControl: AccountControl){
        this.accountControlSubject.next(accountControl)
    }

    getAccountControlList(){
        return this.accountControlListSubject;
    }

    setAccountControlList(accountControlList: AccountControl[]){
        this.accountControlListSubject.next(accountControlList)
    }
}