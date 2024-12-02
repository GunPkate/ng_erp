import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Category, InitialCategory } from "../interface/P05Stock/Category";

@Injectable()
export class CategoryBehaviorSubj{
    private category :Category = InitialCategory.InitialCategoryObj();
    private categoryList: Category[] = []

    private categorySubject = new BehaviorSubject<Category>(this.category);
    private categoryListSubject = new BehaviorSubject<Category[]>(this.categoryList);

    getCategory(){
        return this.categorySubject;
    }

    setCategory(category: Category){
        this.categorySubject.next(category)
    }

    getCategoryList(){
        return this.categoryListSubject;
    }

    setCategoryList(categoryList: Category[]){
        this.categoryListSubject.next(categoryList)
    }
}