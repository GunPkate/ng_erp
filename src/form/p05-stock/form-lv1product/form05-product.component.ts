import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule  } from '@angular/material/table';
import { MatSortModule  } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { CategoryBehaviorSubj } from 'src/shared/behaviorsubject/Category';
import { Category, InitialCategory } from 'src/shared/interface/P05Stock/Category';
import { v4 as uuidv4 } from 'uuid';
import { StockService } from 'src/shared/services/S05Stocks/S05_Category';

@Component({
  selector: 'app-form05-product',
  templateUrl: './form05-product.component.html',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, ],
  styleUrls: ['./form05-product.component.css']
})

export class Form05ProductComponent implements OnInit {
  
  title = 'Product List'
  displayedColumns: string[] = ['id', 'categoryName'];
  dataSource :Category[] = []
  currentCategory: Category = InitialCategory.InitialCategoryObj();

  constructor(
    private http: HttpClient,
    private categoryService: StockService,
    private categoryBehaviorSubj: CategoryBehaviorSubj,
  ) { 
    this.loadProduct()
  }

  ngOnInit(): void {

  }

  register(){
    this.currentCategory.id = uuidv4()
    this.http.post('http://localhost:3000/stock/genproduct',this.currentCategory).subscribe((res)=>{this.loadProduct()})    
  }

  loadProduct() {
    this.categoryService.loadProduct();
    this.categoryBehaviorSubj.getCategoryList().subscribe((res)=>{ this.dataSource = res  } )
  }

  clear(){
    this.currentCategory = InitialCategory.InitialCategoryObj();
  }

  validateInput(data: any){
    if(data){
      return data
    }else{
      return ""
    }
  }

  IdChange( event : any){
    this.currentCategory.id = this.validateInput(event.target.value);
    console.log(this.currentCategory)
  }

  productNameChange( event : any){
    this.currentCategory.categoryName = this.validateInput(event.target.value);
    console.log(this.currentCategory)
  }

  qtyChange( event : any){
    this.currentCategory.categoryName = this.validateInput(event.target.value);
    console.log(this.currentCategory)
  }

  deleteData(id: string){
    console.log(id)
    this.currentCategory.id = id
    this.http.post('http://localhost:3000/category/delete',this.currentCategory).subscribe(
      (res) =>{
        this.loadProduct()
        this.clear()
      }
    )
  }

  updateData(id: string){
    console.log(id)
    this.currentCategory.id = id
    this.http.post('http://localhost:3000/category/update',this.currentCategory).subscribe(
      (res) =>{
        this.loadProduct()
        this.clear()
      }
    )
  }

}