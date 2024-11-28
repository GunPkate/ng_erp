import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule  } from '@angular/material/table';
import { MatSortModule  } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';

import { UserService } from 'src/shared/services/S04setting/S04_1User';
import { v4 as uuidv4 } from 'uuid';
import { AccountHead, InitialAccountHead } from 'src/shared/interface/P04Setting/Account/AccountHead';
import { AccountHeadBehaviorSubj } from 'src/shared/behaviorsubject/AccountHead';
import { AccountService } from 'src/shared/services/S04setting/S04_2Account';

@Component({
  selector: 'app-form04AccountHead',
  templateUrl: './form04AccountHead.component.html',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, ],
  styleUrls: ['./form04AccountHead.component.css']
})

export class Form04AccountHead implements OnInit {


  title04 = 'User Type'
  displayedColumns: string[] = ['id', 'accountHeadName', 'code'];
  dataSource :AccountHead[] = []
  accHead: AccountHead = InitialAccountHead.InitialAccountHeadObj();

  constructor(
    private http: HttpClient,
    private accountService: AccountService,
    private accountHeadBehaviorSubj: AccountHeadBehaviorSubj,
  ) { 
    this.loadAccountHead()
  }

  ngOnInit(): void {

  }

  register(){
    this.accHead.id = uuidv4()
    this.http.post('http://localhost:3000/account/acchead/create',this.accHead).subscribe((res)=>{this.loadAccountHead()})    
  }

  loadAccountHead() {
    this.accountService.loadAccountHead();
    this.accountHeadBehaviorSubj.getUserList().subscribe((res)=>{ this.dataSource = res; console.log(res)  } )
  }

  clear(){
    this.accHead = InitialAccountHead.InitialAccountHeadObj();
  }

  AccountHeadNameChange( event : any){
    this.accHead.accountHeadName = this.validateInput(event.target.value);
    console.log(this.accHead)
  }

  validateInput(data: any){
    if(data){
      return data
    }else{
      return ""
    }
  }

  IdChange( event : any){
    this.accHead.id = this.validateInput(event.target.value);
    console.log(this.accHead)
  }

  deleteData(id: string){
    console.log(id)
    this.accHead.id = id
    this.http.post('http://localhost:3000/usertype/delete',this.accHead).subscribe(
      (res) =>{
        this.loadAccountHead()
        this.clear()
      }
    )
  }

  updateData(id: string){
    console.log(id)
    this.accHead.id = id
    this.http.post('http://localhost:3000/usertype/update',this.accHead).subscribe(
      (res) =>{
        this.loadAccountHead()
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