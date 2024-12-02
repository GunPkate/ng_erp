import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product, InitialProduct } from "../interface/P05Stock/Product";

@Injectable()
export class ProductBehaviorSubj {
    private ProductSubject = new BehaviorSubject<Product>(InitialProduct.InitialProductObj())
    private ProductListSubject = new BehaviorSubject<Product[]>([])

    getProduct(){
        return this.ProductSubject;
    }

    setProduct(Product: Product){
        this.ProductSubject.next(Product)
    }

    getProductList(){
        return this.ProductListSubject;
    }

    setProductList(ProductList: Product[]){
        this.ProductListSubject.next(ProductList)
    }
}