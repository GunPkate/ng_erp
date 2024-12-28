import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule  } from '@angular/material/table';
import { MatSortModule  } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';
import { StockService } from 'src/shared/services/S05Stocks/S05_Category';
import { InitialProduct, Product } from 'src/shared/interface/P05Stock/Product';
import { ProductBehaviorSubj } from 'src/shared/behaviorsubject/Product';
import { Category } from 'src/shared/interface/P05Stock/Category';
import { CategoryBehaviorSubj } from 'src/shared/behaviorsubject/Category';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-form05-product',
  templateUrl: './form05-product.component.html',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, NgFor],
  styleUrls: ['./form05-product.component.css']
})

export class Form05ProductComponent implements OnInit {
  
  title = 'Product List'
  displayedColumns: string[] = ['id', 'productName', 'stockThresholdQty', 'catagoryId'];
  dataSource :Product[] = []
  currentProduct: Product = InitialProduct.InitialProductObj();
  categoryDropDown: Category[] = []

  constructor(
    private http: HttpClient,
    private stockService: StockService,
    private productBehaviorSubj: ProductBehaviorSubj,
    private categoryBehaviorSubj: CategoryBehaviorSubj,
  ) { 
    this.loadProduct()
  }

  ngOnInit(): void {

  }

  register(){
    this.currentProduct.id = uuidv4()
    this.http.post('http://localhost:3000/stock/genproduct',this.currentProduct).subscribe((res)=>{this.loadProduct()})    
  }

  loadProduct() {
    this.stockService.loadProduct();
    this.productBehaviorSubj.getProductList().subscribe((res)=>{ this.dataSource = res  } )
    this.stockService.loadCategory();
    this.categoryBehaviorSubj.getCategoryList().subscribe((res=>{ this.categoryDropDown = res }))
  }

  clear(){
    this.currentProduct = InitialProduct.InitialProductObj();
  }

  validateInput(data: any){
    if(data){
      return data
    }else{
      return ""
    }
  }

  IdChange( event : any){
    this.currentProduct.id = this.validateInput(event.target.value);
    console.log(this.currentProduct)
  }

  productNameChange( event : any){
    this.currentProduct.productName = this.validateInput(event.target.value);
    console.log(this.currentProduct)
  }

  qtyChange( event : any){
    this.currentProduct.stockThresholdQty = parseInt(this.validateInput(event.target.value));
    console.log(this.currentProduct)
  }

  categoryChange( event : any){
    this.currentProduct.catagoryId = this.validateInput(event);
    console.log(this.currentProduct)
  }

  getName(value: string, field: string){
    if(field == 'category'){
      for (let i = 0; i < this.categoryDropDown.length; i++) {
        if( this.categoryDropDown[i].id == value ) return this.categoryDropDown[i].categoryName
      }
    }
    return 'No Data'
  }

  deleteData(id: string){
    console.log(id)
    this.currentProduct.id = id
    this.http.post('http://localhost:3000/stock/productdelete',this.currentProduct).subscribe(
      (res) =>{
        this.loadProduct()
        this.clear()
      }
    )
  }

  updateData(id: string){
    // console.log(id)
    // this.currentProduct.id = id
    // this.http.post('http://localhost:3000/category/update',this.currentProduct).subscribe(
    //   (res) =>{
    //     this.loadProduct()
    //     this.clear()
    //   }
    // )
  }

}