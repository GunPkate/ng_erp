import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { GeneralLedger, InitialGeneralLedger } from "../interface/P07Transaction/GeneralLedger";


@Injectable()
export class GeneralLedgerBehaviorSubj{
    private generalLedger :GeneralLedger = InitialGeneralLedger.InitialGeneralLedger();
    private generalLedgerList: GeneralLedger[] = []

    private generalLedgerSubject = new BehaviorSubject<GeneralLedger>(this.generalLedger);
    private generalLedgerListSubject = new BehaviorSubject<GeneralLedger[]>(this.generalLedgerList);

    getGeneralLedger(){
        return this.generalLedgerSubject;
    }

    setGeneralLedger(generalLedger: GeneralLedger){
        this.generalLedgerSubject.next(generalLedger)
    }

    getGeneralLedgerList(){
        return this.generalLedgerListSubject;
    }

    setGeneralLedgerList(generalLedgerList: GeneralLedger[]){
        this.generalLedgerListSubject.next(generalLedgerList)
    }
}