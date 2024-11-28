import { BehaviorSubject, Observable } from "rxjs";
import { InitialUser, User } from "../interface/P04Setting/User/User";
import { Injectable } from "@angular/core";

@Injectable()
export class UserBehaviorSubj{
    private user :User = InitialUser.InitialUserObj();
    private userList: User[] = []

    private userSubject = new BehaviorSubject<User>(this.user);
    private userListSubject = new BehaviorSubject<User[]>(this.userList);

    getUser(){
        return this.userSubject;
    }

    setUser(user: User){
        this.userSubject.next(user)
    }

    getUserList(){
        return this.userListSubject;
    }

    setUserList(userList: User[]){
        this.userListSubject.next(userList)
    }
}