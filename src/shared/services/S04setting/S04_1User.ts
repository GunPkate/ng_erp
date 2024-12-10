import { inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { InitialUserType, UserType } from "src/shared/interface/P04Setting/User/UserType";
import { UserBehaviorSubj } from "src/shared/behaviorsubject/User";
import { UserTypeBehaviorSubj } from "src/shared/behaviorsubject/UserType";
import Swal from "sweetalert2";

@Injectable()
export class UserService{
    constructor(
        private http: HttpClient,
        private userBehaviorSubj: UserBehaviorSubj,
        private userTypeBehaviorSubj: UserTypeBehaviorSubj
    ){}

    loadUser(){
        this.http.get('http://localhost:3000/user/all').subscribe((res: any)=> {
          this.userBehaviorSubj.setUserList(res)
        },
        error => {
            if(error.error.meta){
                Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
            }else{
                Swal.fire(JSON.stringify(error.name),error.message,'error')
            }
        })
    }
    
    loadUserType(){
        this.http.get('http://localhost:3000/usertype/all').subscribe((res:any)=> {
            let UserTypList: UserType[];
            this.userTypeBehaviorSubj.setUserList(res)
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