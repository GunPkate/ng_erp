import { inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { InitialUserType } from "src/shared/interface/P04Setting/User/UserType";

@Injectable()
export class UserService{
    constructor(private http: HttpClient){}

    loadUser(){
        this.http.get('http://localhost:3000/user/all').subscribe((res)=> {
          console.log("UserService",res)
        })
      }
    
    //   loadUserType(){
    //     this.http.get('http://localhost:3000/usertype/all').subscribe((res:any)=> {
    //       res.forEach((element: any) => {
    //         let data = InitialUserType.InitialUserTypeObj()
    //         data.userType = element.userType
    //         data.id = element.id
    //         this.userTypeDropDown.push(data)
    
            
    //         if(this.dataSource.length > 0) {
    //           for (let i = 0; i < this.dataSource.length; i++) {
    //             if(element.id == this.dataSource[i].userTypeId){
    //               this.dataSource[i].userTypeId = element.userType ;
    //             }
    //           }
    //         }
    
    //       }
    //     );
    //     })
    //   }
}