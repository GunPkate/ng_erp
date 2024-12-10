import { inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { FinancialYearBehaviorSubj } from "src/shared/behaviorsubject/FinancialYear";
import { catchError, throwError } from "rxjs";
import Swal from "sweetalert2";


@Injectable()
export class FinancialYearService{
    constructor(
        private http: HttpClient,
        private userBehaviorSubj: FinancialYearBehaviorSubj,
    ){}

    loadFinancialYear(){
        this.http.get('http://localhost:3000/financialyear/all').pipe(catchError(error => throwError(error))).subscribe((res: any)=> {
          this.userBehaviorSubj.setFinancialYearList(res)
        },
        error => {
            if(error.error.meta){
                Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
            }else{
                Swal.fire(JSON.stringify(error.name),error.message,'error')
            }
        })
    }
    

}