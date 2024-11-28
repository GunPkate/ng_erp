import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule  } from '@angular/material/table';
import { MatSortModule  } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { InitialUserType, UserType } from 'src/shared/interface/P04Setting/User/UserType';
import { NgFor } from '@angular/common';
import { InitialUser, User } from 'src/shared/interface/P04Setting/User/User';
import { v4 as uuidv4 } from 'uuid';
import { UserService } from 'src/shared/services/S04setting/S04_1User';
import { UserBehaviorSubj } from "src/shared/behaviorsubject/User";
import { UserTypeBehaviorSubj } from "src/shared/behaviorsubject/UserType";

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
  displayedColumns: string[] = ['userId', 'userTypeId', 'firstName','lastName','contactNo','email','username'];
  dataSource :User[] = []
  userTypeDropDown: UserType[] = []
  currentUser: User = InitialUser.InitialUserObj()
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private userTypeBehaviorSubj: UserTypeBehaviorSubj,
    private userBehaviorSubj: UserBehaviorSubj,
  ) { 
    this.userService.loadUserType();
    this.userService.loadUser();
    this.userTypeBehaviorSubj.getUserList().subscribe((res)=>{ this.userTypeDropDown = res  } )
    this.userBehaviorSubj.getUserList().subscribe((res)=>{ this.dataSource = res  } )
  }

  ngOnInit(): void {
    // this.currentUser.firstName = "Test01";
    // this.currentUser.lastName = "Test01";
    // this.currentUser.email = "Test01";
    // this.currentUser.contactNo = "Test01";
    // this.currentUser.username = "Test01";
    // this.currentUser.password = "Test01";
    // this.currentUser.userTypeId = "Test01";
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

  EmailChange( event : any){
    this.currentUser.email = this.validateInput(event.target.value);
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
    this.userService.loadUser();
  }


  register(){
    this.currentUser.userId = uuidv4()
    this.http.post('http://localhost:3000/user/create',this.currentUser).subscribe(res=>{
      this.loadUser()
      this.clear()
    })
  }
  clear(){
    this.currentUser = InitialUser.InitialUserObj();
  }

  deleteData(id: string){
    console.log(id)
    this.currentUser.userId = id
    this.http.post('http://localhost:3000/user/delete',this.currentUser).subscribe(
      (res) =>{
        this.loadUser()
        this.clear()
      }
    )
  }

  updateData(id: string){
    console.log(id)
    this.currentUser.userId = id
    this.http.post('http://localhost:3000/user/update',this.currentUser).subscribe(
      (res) =>{
        this.loadUser()
        this.clear()
      }
    )
  }
}