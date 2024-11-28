import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AccountHeadBehaviorSubj } from "src/shared/behaviorsubject/AccountHead";
import { AccountControlBehaviorSubj } from "src/shared/behaviorsubject/AccountConrtol";
import { UserBehaviorSubj } from "src/shared/behaviorsubject/User";
import { UserTypeBehaviorSubj } from "src/shared/behaviorsubject/UserType";
import { UserType } from "src/shared/interface/P04Setting/User/UserType";

@Injectable()
export class AccountService{
    constructor(
        private http: HttpClient,
        private accountHeadBehaviorSubj: AccountHeadBehaviorSubj,
        private accountControlBehaviorSubj: AccountControlBehaviorSubj
    ){}

    loadAccountHead(){
        this.http.get('http://localhost:3000/account/acchead/all').subscribe((res: any)=> {
            console.log(res)
            this.accountHeadBehaviorSubj.setAccountHeadList(res)
        })
    }
    
    loadAccountControl(){
        this.http.get('http://localhost:3000/account/accControl/all').subscribe((res: any)=> {
            console.log(res)
            this.accountControlBehaviorSubj.setAccountControlList(res)
        })
    }
}