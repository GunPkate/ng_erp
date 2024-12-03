import { BehaviorSubject, Observable } from "rxjs";
import { InitialFinancialYear, FinancialYear } from "../interface/P04Setting/FinancialYear/FinancialYear";
import { Injectable } from "@angular/core";

@Injectable()
export class FinancialYearBehaviorSubj{
    private financialYear :FinancialYear = InitialFinancialYear.InitialFinancialYearObj();
    private financialYearList: FinancialYear[] = []

    private financialYearSubject = new BehaviorSubject<FinancialYear>(this.financialYear);
    private financialYearListSubject = new BehaviorSubject<FinancialYear[]>(this.financialYearList);

    getFinancialYear(){
        return this.financialYearSubject;
    }

    setFinancialYear(financialYear: FinancialYear){
        this.financialYearSubject.next(financialYear)
    }

    getFinancialYearList(){
        return this.financialYearListSubject;
    }

    setFinancialYearList(financialYearList: FinancialYear[]){
        this.financialYearListSubject.next(financialYearList)
    }
}