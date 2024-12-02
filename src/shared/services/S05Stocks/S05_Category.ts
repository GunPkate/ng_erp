import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoryBehaviorSubj } from "src/shared/behaviorsubject/Category";

@Injectable()
export class CategoryService{
    constructor(
        private http: HttpClient,
        private categoryBehaviorSubj: CategoryBehaviorSubj
    ){}

    loadCategory(){
        this.http.get('http://localhost:3000/category/all').subscribe( (res:any)=>{
            this.categoryBehaviorSubj.setCategoryList(res)
        })
    }
}