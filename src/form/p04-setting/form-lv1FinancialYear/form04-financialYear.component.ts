import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule  } from '@angular/material/table';
import { MatSortModule  } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { NgClass, NgFor } from '@angular/common';
import { InitialFinancialYear, FinancialYear } from 'src/shared/interface/P04Setting/FinancialYear/FinancialYear';
import { v4 as uuidv4 } from 'uuid';
import { FinancialYearService } from 'src/shared/services/S04setting/S04_1FinancialYear';
import { FinancialYearBehaviorSubj } from "src/shared/behaviorsubject/FinancialYear";
import { DateFormatPipe } from 'src/shared/services/Pipe/DatePipte';

@Component({
  selector: 'app-form04-financialYear',
  templateUrl: './form04-financialYear.component.html',
  standalone: true,
  imports: [ 
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSortModule, 
    MatTableModule, 
    NgFor, NgClass,
    DateFormatPipe
  ],
  styleUrls: ['./form04-financialYear.component.css']
})

export class Form04FinancialYearComponent implements OnInit {
  

  title04 = 'FinancialYear'
  displayedColumns: string[] = ['financialYearId',  'financialYear','isActive' ];
  dataSource :FinancialYear[] = []
  currentFinancialYear: FinancialYear = InitialFinancialYear.InitialFinancialYearObj()
  financialYearDate: Date = new Date
  constructor(
    private http: HttpClient,
    private financialyearService: FinancialYearService,
    private financialyearBehaviorSubj: FinancialYearBehaviorSubj,
  ) { 
    this.financialyearService.loadFinancialYear();
 this.financialyearBehaviorSubj.getFinancialYearList().subscribe((res)=>{  this.dataSource = res  } )

  }

  ngOnInit(): void {
    // this.currentFinancialYear.financialYear = "Test01";
    // this.currentFinancialYear.lastName = "Test01";
  }

  financialYearChange( event : any){
    this.currentFinancialYear.financialYear = this.validateInput(event);
    console.log(this.currentFinancialYear)
  }

  isActiveChange( event : any){
    event === 'true' ? this.currentFinancialYear.isActive = true : this.currentFinancialYear.isActive = false 
    console.log(this.currentFinancialYear)
  }

  validateInput(data: any){
    if(data){
      return data
    }else{
      return ""
    }
  }

  loadFinancialYear(){
    this.financialyearService.loadFinancialYear();
  }


  register(){
    this.currentFinancialYear.financialYearId = uuidv4()
    this.http.post('http://localhost:3000/financialyear/create',this.currentFinancialYear).subscribe(res=>{
      this.loadFinancialYear()
      this.clear()
    })
  }
  clear(){
    this.currentFinancialYear = InitialFinancialYear.InitialFinancialYearObj();
  }

  deleteData(id: string){
    console.log(id)
    this.currentFinancialYear.financialYearId = id
    this.http.post('http://localhost:3000/financialyear/delete',this.currentFinancialYear).subscribe(
      (res) =>{
        this.loadFinancialYear()
        this.clear()
      }
    )
  }

  updateData(id: string){
    console.log(id)
    this.currentFinancialYear.financialYearId = id
    this.http.post('http://localhost:3000/financialyear/update',this.currentFinancialYear).subscribe(
      (res) =>{
        this.loadFinancialYear()
        this.clear()
      }
    )
  }
}