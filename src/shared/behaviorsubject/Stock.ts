import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Stock, InitialStock } from "../interface/P05Stock/Stock";

@Injectable()
export class StockBehaviorSubj {
    private StockSubject = new BehaviorSubject<Stock>(InitialStock.InitialStockObj())
    private StockListSubject = new BehaviorSubject<Stock[]>([])

    getStock(){
        return this.StockSubject;
    }

    setStock(Stock: Stock){
        this.StockSubject.next(Stock)
    }

    getStockList(){
        return this.StockListSubject;
    }

    setStockList(StockList: Stock[]){
        this.StockListSubject.next(StockList)
    }
}