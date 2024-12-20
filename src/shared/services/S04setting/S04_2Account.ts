import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AccountHeadBehaviorSubj } from "src/shared/behaviorsubject/AccountHead";
import { AccountControlBehaviorSubj } from "src/shared/behaviorsubject/AccountConrtol";
import { UserBehaviorSubj } from "src/shared/behaviorsubject/User";
import { UserTypeBehaviorSubj } from "src/shared/behaviorsubject/UserType";
import { UserType } from "src/shared/interface/P04Setting/User/UserType";
import { AccountSubcontrolBehaviorSubj } from "src/shared/behaviorsubject/AccountSubconrtol";
import Swal from "sweetalert2";

@Injectable()
export class AccountService{
    constructor(
        private http: HttpClient,
        private accountHeadBehaviorSubj: AccountHeadBehaviorSubj,
        private accountControlBehaviorSubj: AccountControlBehaviorSubj,
        private accountSubcontrolBehaviorSubj: AccountSubcontrolBehaviorSubj
    ){}

    loadAccountHead(){
        this.http.get('http://localhost:3000/account/acchead/all').subscribe((res: any)=> {
            console.log(res)
            this.accountHeadBehaviorSubj.setAccountHeadList(res)
        },
        error => {
            if(error.error.meta){
                Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
            }else{
                Swal.fire(JSON.stringify(error.name),error.message,'error')
            }
        })
    }
    
    loadAccountControl(){
        this.http.get('http://localhost:3000/account/accControl/all').subscribe((res: any)=> {
            console.log(res)
            this.accountControlBehaviorSubj.setAccountControlList(res)
        },
        error => {
            if(error.error.meta){
                Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
            }else{
                Swal.fire(JSON.stringify(error.name),error.message,'error')
            }
        })
    }

    loadAccounSubcontrol(){
        this.http.get('http://localhost:3000/account/accsubcontrol/all').subscribe((res: any)=> {
            console.log(res)
            this.accountSubcontrolBehaviorSubj.setAccountSubcontrolList(res)
        },
        error => {
            if(error.error.meta){
                Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
            }else{
                Swal.fire(JSON.stringify(error.name),error.message,'error')
            }
        })
    }
}