import { BehaviorSubject, Observable } from "rxjs";
import { InitialUserType, UserType } from "../interface/P04Setting/User/UserType";
import { Injectable } from "@angular/core";

@Injectable()
export class UserTypeBehaviorSubj{
    private userType :UserType = InitialUserType.InitialUserTypeObj();
    private userTypeList: UserType[] = []

    private userSubject = new BehaviorSubject<UserType>(this.userType);
    private userListSubject = new BehaviorSubject<UserType[]>(this.userTypeList);

    getUser(){
        return this.userSubject;
    }

    setUser(userType: UserType){
        this.userSubject.next(userType)
    }

    getUserList(){
        return this.userListSubject;
    }

    setUserList(userTypeList: UserType[]){
        this.userListSubject.next(userTypeList)
    }
}