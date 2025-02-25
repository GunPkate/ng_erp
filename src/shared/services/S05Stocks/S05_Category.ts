import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoryBehaviorSubj } from "src/shared/behaviorsubject/Category";
import { ProductBehaviorSubj } from "src/shared/behaviorsubject/Product";
import { StockBehaviorSubj } from "src/shared/behaviorsubject/Stock";
import Swal from "sweetalert2";

@Injectable()
export class StockService{
    constructor(
        private http: HttpClient,
        private categoryBehaviorSubj: CategoryBehaviorSubj,
        private stockBehaviorSubj: StockBehaviorSubj,
        private productBehaviorSubj: ProductBehaviorSubj
    ){}

    loadCategory(){
        this.http.get('http://localhost:3000/category/all').subscribe( (res:any)=>{
            this.categoryBehaviorSubj.setCategoryList(res)
        },
        error => {
            if(error.error.meta){
                Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
            }else{
                Swal.fire(JSON.stringify(error.name),error.message,'error')
            }
        })
    }

    loadStock(){
        this.http.get('http://localhost:3000/stock/all').subscribe( (res:any)=>{
            this.stockBehaviorSubj.setStockList(res)
        },
        error => {
            if(error.error.meta){
                Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
            }else{
                Swal.fire(JSON.stringify(error.name),error.message,'error')
            }
        })
    }

    loadProduct(){
        this.http.get('http://localhost:3000/stock/productlist').subscribe( (res:any)=>{
            this.productBehaviorSubj.setProductList(res)
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