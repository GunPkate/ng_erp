import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule  } from '@angular/material/table';
import { MatSortModule  } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { InitialUserType, UserType } from 'src/interface/P04Setting/User/UserType';
import { NgFor } from '@angular/common';
import { InitialUser, User } from 'src/interface/P04Setting/User/User';

@Component({
  selector: 'app-form04-user',
  templateUrl: './form04-user.component.html',
  standalone: true,
  imports: [ 
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSortModule, 
    MatTableModule, 
    NgFor,
  ],
  styleUrls: ['./form04-user.component.css']
})

export class Form04UserComponent implements OnInit {
  

  title04 = 'User'
  displayedColumns: string[] = ['userId','firstName','lastName','contactNo','email','username'];
  dataSource :any = []
  userTypeDropDown: UserType[] = []
  currentUser: User = InitialUser.InitialUserObj()
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadUser();
    this.http.get('http://localhost:3000/usertype/all').subscribe((res:any)=> {
      res.forEach((element: any) => {
        let data = InitialUserType.InitialUserTypeObj()
        data.userType = element.userType
        data.id = element.id
        this.userTypeDropDown.push(data)
      }
    );
    console.log(this.userTypeDropDown)

    })
    // console.log(process.env)
  }

  firstNameChange( event : any){
    this.currentUser.firstName = this.validateInput(event.target.value);
    console.log(this.currentUser)
  }

  lastNameChange( event : any){
    this.currentUser.lastName = this.validateInput(event.target.value);
    console.log(this.currentUser)
  }

  userTypeChange( event : any){
    this.currentUser.userTypeId = event;
    console.log(this.currentUser)
  }

  ContactChange( event : any){
    this.currentUser.contactNo = this.validateInput(event.target.value);
    console.log(this.currentUser)
  }

  UsernameChange( event : any){
    this.currentUser.username = this.validateInput(event.target.value);
    console.log(this.currentUser)
  }

  PasswordChange( event : any){
    this.currentUser.password = this.validateInput(event.target.value);
    console.log(this.currentUser)
  }

  validateInput(data: any){
    if(data){
      return data
    }else{
      return ""
    }
  }

  loadUser(){
    this.http.get('http://localhost:3000/user/all').subscribe((res)=> {
      this.dataSource = res
      console.log(res)
    })
  }

  register(){
    console.log(2134)
    this.http.post('http://localhost:3000/user/create',this.currentUser).toPromise()
  }
  clear(){
    this.currentUser = InitialUser.InitialUserObj();
  }
}