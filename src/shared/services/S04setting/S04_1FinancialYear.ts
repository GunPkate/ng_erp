import { inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { FinancialYearBehaviorSubj } from "src/shared/behaviorsubject/FinancialYear";


@Injectable()
export class FinancialYearService{
    constructor(
        private http: HttpClient,
        private userBehaviorSubj: FinancialYearBehaviorSubj,
    ){}

    loadFinancialYear(){
        this.http.get('http://localhost:3000/financialyear/all').subscribe((res: any)=> {
          this.userBehaviorSubj.setFinancialYearList(res)
        })
    }
    

}