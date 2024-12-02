import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoryBehaviorSubj } from "src/shared/behaviorsubject/Category";
import { ProductBehaviorSubj } from "src/shared/behaviorsubject/Product";

@Injectable()
export class StockService{
    constructor(
        private http: HttpClient,
        private categoryBehaviorSubj: CategoryBehaviorSubj,
        private productBehaviorSubj: ProductBehaviorSubj
    ){}

    loadCategory(){
        this.http.get('http://localhost:3000/category/all').subscribe( (res:any)=>{
            this.categoryBehaviorSubj.setCategoryList(res)
        })
    }

    loadProduct(){
        this.http.get('http://localhost:3000/product/all').subscribe( (res:any)=>{
            this.productBehaviorSubj.setProductList(res)
        })
    }
}