import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AccountSubcontrol, InitialAccountSubcontrol } from "../interface/P04Setting/Account/AccountSubcontrol";

@Injectable()
export class AccountSubcontrolBehaviorSubj{
    private AccountSubcontrol :AccountSubcontrol = InitialAccountSubcontrol.InitialAccountSubcontrolObj();
    private accountControlList: AccountSubcontrol[] = []

    private AccountSubcontrolSubject = new BehaviorSubject<AccountSubcontrol>(this.AccountSubcontrol);
    private AccountSubcontrolListSubject = new BehaviorSubject<AccountSubcontrol[]>(this.accountControlList);

    getAccountSubcontrol(){
        return this.AccountSubcontrolSubject;
    }

    setAccountSubcontrol(AccountSubcontrol: AccountSubcontrol){
        this.AccountSubcontrolSubject.next(AccountSubcontrol)
    }

    getAccountSubcontrolList(){
        return this.AccountSubcontrolListSubject;
    }

    setAccountSubcontrolList(AccountSubcontrolList: AccountSubcontrol[]){
        this.AccountSubcontrolListSubject.next(AccountSubcontrolList)
    }
}