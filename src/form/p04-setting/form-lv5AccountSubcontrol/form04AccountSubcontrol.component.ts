import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule  } from '@angular/material/table';
import { MatSortModule  } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';
import { AccountSubcontrol, InitialAccountSubcontrol } from 'src/shared/interface/P04Setting/Account/AccountSubcontrol';
import { AccountControl } from 'src/shared/interface/P04Setting/Account/AccountControl';
import { AccountControlBehaviorSubj } from 'src/shared/behaviorsubject/AccountConrtol';
import { AccountSubcontrolBehaviorSubj } from 'src/shared/behaviorsubject/AccountSubconrtol';
import { AccountService } from 'src/shared/services/S04setting/S04_2Account';

@Component({
  selector: 'app-form04AccountSubcontrol',
  templateUrl: './form04AccountSubcontrol.component.html',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule,NgFor ],
  styleUrls: ['./form04AccountSubcontrol.component.css']
})

export class Form04AccountSubcontrol implements OnInit {
  
  title04 = 'Account Subcontrol'
  displayedColumns: string[] = ['id' ,'accountSubcontrolName' ,'code' ,'accountSubcontrolCode'];
  dataSource :AccountSubcontrol[] = []
  accountControlDropDown: AccountControl[] = []
  currentAccSubcontrol: AccountSubcontrol = InitialAccountSubcontrol.InitialAccountSubcontrolObj()
  constructor(
    private http: HttpClient,
    private accountService: AccountService,
    private accountControlBehaviorSubj: AccountControlBehaviorSubj,
    private accountSubcontrolBehaviorSubj: AccountSubcontrolBehaviorSubj,
  ) { 
    this.accountService.loadAccountControl();
    this.accountService.loadAccounSubcontrol();
    this.accountControlBehaviorSubj.getAccountControlList().subscribe((res)=>{ this.accountControlDropDown = res  } )
    this.accountSubcontrolBehaviorSubj.getAccountSubcontrolList().subscribe((res)=>{ this.dataSource = res  } )
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

  subcontrolNameChange( event : any){
    this.currentAccSubcontrol.accountSubcontrolName = this.validateInput(event.target.value);
    console.log(this.currentAccSubcontrol)
  }

  codeChange( event : any){
    this.currentAccSubcontrol.code = this.validateInput(event.target.value);
    console.log(this.currentAccSubcontrol)
  }

  accountControlCodeChange( event : any){
    this.currentAccSubcontrol.accountControlCode	 = event;
    console.log(this.currentAccSubcontrol)
  }

  validateInput(data: any){
    if(data){
      return data
    }else{
      return ""
    }
  }

  loadSubcontrol(){
    this.accountService.loadAccounSubcontrol();
  }


  register(){
    this.currentAccSubcontrol.id = uuidv4()
    this.http.post('http://localhost:3000/account/accsubcontrol/create',this.currentAccSubcontrol).subscribe(res=>{
      this.loadSubcontrol()
      this.clear()
    })
  }
  clear(){
    this.currentAccSubcontrol = InitialAccountSubcontrol.InitialAccountSubcontrolObj();
  }

  deleteData(id: string){
    console.log(id)
    this.currentAccSubcontrol.id = id
    this.http.post('http://localhost:3000/account/accsubcontrol/delete',this.currentAccSubcontrol).subscribe(
      (res) =>{
        this.loadSubcontrol()
        this.clear()
      }
    )
  }

  updateData(id: string){
    console.log(id)
    this.currentAccSubcontrol.id = id
    this.http.post('http://localhost:3000/user/update',this.currentAccSubcontrol).subscribe(
      (res) =>{
        this.loadSubcontrol()
        this.clear()
      }
    )
  }
}