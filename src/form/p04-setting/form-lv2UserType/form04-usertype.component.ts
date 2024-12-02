import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule  } from '@angular/material/table';
import { MatSortModule  } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { UserTypeBehaviorSubj } from 'src/shared/behaviorsubject/UserType';
import { UserService } from 'src/shared/services/S04setting/S04_1User';
import { InitialUserType, UserType } from 'src/shared/interface/P04Setting/User/UserType';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-form04-usertype',
  templateUrl: './form04-usertype.component.html',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, ],
  styleUrls: ['./form04-usertype.component.css']
})

export class Form04UserTypeComponent implements OnInit {
  

  title04 = 'User Type'
  displayedColumns: string[] = ['id', 'userType'];
  dataSource :UserType[] = []
  currentUserType: UserType = InitialUserType.InitialUserTypeObj();

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private userTypeBehaviorSubj: UserTypeBehaviorSubj,
  ) { 
    this.loadUser()
  }

  ngOnInit(): void {

  }

  register(){
    this.currentUserType.id = uuidv4()
    this.http.post('http://localhost:3000/usertype/create',this.currentUserType).subscribe((res)=>{this.loadUser()})    
  }

  loadUser() {
    this.userService.loadUserType();
    this.userTypeBehaviorSubj.getUserList().subscribe((res)=>{ this.dataSource = res  } )
  }

  clear(){
    this.currentUserType = InitialUserType.InitialUserTypeObj();
  }

  UserTypeChange( event : any){
    this.currentUserType.userType = this.validateInput(event.target.value);
    console.log(this.currentUserType)
  }

  validateInput(data: any){
    if(data){
      return data
    }else{
      return ""
    }
  }

  IdChange( event : any){
    this.currentUserType.id = this.validateInput(event.target.value);
    console.log(this.currentUserType)
  }

  deleteData(id: string){
    console.log(id)
    this.currentUserType.id = id
    this.http.post('http://localhost:3000/usertype/delete',this.currentUserType).subscribe(
      (res) =>{
        this.loadUser()
        this.clear()
      }
    )
  }

  updateData(id: string){
    console.log(id)
    this.currentUserType.id = id
    this.http.post('http://localhost:3000/usertype/update',this.currentUserType).subscribe(
      (res) =>{
        this.loadUser()
        this.clear()
      }
    )
  }

}