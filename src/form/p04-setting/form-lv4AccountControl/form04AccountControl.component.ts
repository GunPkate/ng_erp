import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule  } from '@angular/material/table';
import { MatSortModule  } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';

import { v4 as uuidv4 } from 'uuid';
import { AccountControl, InitialAccountControl } from 'src/shared/interface/P04Setting/Account/AccountControl';
import { AccountControlBehaviorSubj } from 'src/shared/behaviorsubject/AccountConrtol';
import { AccountService } from 'src/shared/services/S04setting/S04_2Account';
import { NgFor } from '@angular/common';
import { AccountHead } from 'src/shared/interface/P04Setting/Account/AccountHead';
import { AccountHeadBehaviorSubj } from 'src/shared/behaviorsubject/AccountHead';

@Component({
  selector: 'app-form04AccountControl',
  templateUrl: './form04AccountControl.component.html',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, NgFor ],
  styleUrls: ['./form04AccountControl.component.css']
})

export class Form04AccountControl implements OnInit {

  title04 = 'Account Control'
  displayedColumns: string[] = ['id', 'accountControlName', 'code', 'accountHeadCode'];
  dataSource :AccountControl[] = []
  accControl: AccountControl = InitialAccountControl.InitialAccountControlObj();
  accHeadDropDown: AccountHead[] = []

  constructor(
    private http: HttpClient,
    private accountService: AccountService,
    private accountControlBehaviorSubj: AccountControlBehaviorSubj,
    private accountHeadBehaviorSubj: AccountHeadBehaviorSubj,
  ) { 
    this.loadAccountHead()
    this.loadAccountControl()
  }

  ngOnInit(): void {

  }

  register(){
    this.accControl.id = uuidv4()
    this.http.post('http://localhost:3000/account/accControl/create',this.accControl).subscribe((res)=>{this.loadAccountControl()})    
  }

  loadAccountHead() {
    this.accountService.loadAccountHead();
    this.accountHeadBehaviorSubj.getAccountHeadList().subscribe((res)=>{ this.accHeadDropDown = res; console.log(res)  } )
  }

  loadAccountControl() {
    this.accountService.loadAccountControl();
    this.accountControlBehaviorSubj.getAccountControlList().subscribe((res)=>{ this.dataSource = res; console.log(res)  } )
  }

  clear(){
    this.accControl = InitialAccountControl.InitialAccountControlObj();
  }

  AccountControlNameChange( event : any){
    this.accControl.accountControlName = this.validateInput(event.target.value);
    console.log(this.accControl)
  }
  codeChange( event : any){
    this.accControl.code = this.validateInput(event.target.value);
    console.log(this.accControl)
  }

  AccountHeadCodeChange( event : any){
    this.accControl.accountHeadCode = this.validateInput(event);
    console.log(this.accControl)
  }

  validateInput(data: any){
    if(data){
      return data
    }else{
      return ""
    }
  }

  deleteData(id: string){
    console.log(id)
    this.accControl.id = id
    this.http.post('http://localhost:3000/account/acccontrol/delete',this.accControl).subscribe(
      (res) =>{
        this.loadAccountControl()
        this.clear()
      }
    )
  }

  updateData(id: string){
    console.log(id)
    this.accControl.id = id
    this.http.post('http://localhost:3000/account/acccontrol/update',this.accControl).subscribe(
      (res) =>{
        this.loadAccountControl()
        this.clear()
      }
    )
  }

}

interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}