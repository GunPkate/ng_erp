import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Stock, InitialStock } from "../interface/P05Stock/Stock";

@Injectable()
export class ProductBehaviorSubj {
    private ProductSubject = new BehaviorSubject<Stock>(InitialStock.InitialStockObj())
    private ProductListSubject = new BehaviorSubject<Stock[]>([])

    getProduct(){
        return this.ProductSubject;
    }

    setProduct(Product: Stock){
        this.ProductSubject.next(Product)
    }

    getProductList(){
        return this.ProductListSubject;
    }

    setProductList(ProductList: Stock[]){
        this.ProductListSubject.next(ProductList)
    }
}