import { inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { InitialUserType, UserType } from "src/shared/interface/P04Setting/User/UserType";
import { UserBehaviorSubj } from "src/shared/behaviorsubject/User";
import { UserTypeBehaviorSubj } from "src/shared/behaviorsubject/UserType";

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
        })
    }
    
    loadUserType(){
        this.http.get('http://localhost:3000/usertype/all').subscribe((res:any)=> {
            let UserTypList: UserType[];
            this.userTypeBehaviorSubj.setUserList(res)
        })
    }
}