import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoryBehaviorSubj } from "src/shared/behaviorsubject/Category";
import { ProductBehaviorSubj } from "src/shared/behaviorsubject/Product";
import Swal from "sweetalert2";

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
        },
        error => {
            Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
        })
    }

    loadProduct(){
        this.http.get('http://localhost:3000/product/all').subscribe( (res:any)=>{
            this.productBehaviorSubj.setProductList(res)
        },
        error => {
            Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
        })
    }
}