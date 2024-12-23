import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule  } from '@angular/material/table';
import { MatSortModule  } from '@angular/material/sort';
import { Category } from 'src/shared/interface/P05Stock/Category';
import { HttpClient } from '@angular/common/http';
import { StockBehaviorSubj } from 'src/shared/behaviorsubject/Stock';
import { Stock, InitialStock } from 'src/shared/interface/P05Stock/Stock';
import { StockService } from 'src/shared/services/S05Stocks/S05_Category';
import { CategoryBehaviorSubj } from 'src/shared/behaviorsubject/Category';
import { v4 as uuidv4 } from 'uuid';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-form05-stock',
  templateUrl: './form05-stock.component.html',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, NgFor ],
  styleUrls: ['./form05-stock.component.css']
})

export class Form05StockComponent implements OnInit {

  title05 = 'Product'
  displayedColumns: string[] = ['id',
    // 'productId',
    'catagoryId','productName','quantity','salePrice','currentPurchasePrice','description',
    // 'expiryDate','manuDate','stockThresholdQty','userId'
  ];
  dataSource :Stock[] = []
  categoryDropDown: Category[] = []
  currentProduct: Stock = InitialStock.InitialStockObj()
  manuDate: Date = new Date
  expiryDate: Date = new Date
  constructor(
    private http: HttpClient,
    private stockService: StockService,
    private productBehaviorSubj: StockBehaviorSubj,
    private categoryBehaviorSubj: CategoryBehaviorSubj,
  ) { 
    this.stockService.loadCategory();
    this.stockService.loadStock();
    this.categoryBehaviorSubj.getCategoryList().subscribe((res)=>{ this.categoryDropDown = res  } )
    this.productBehaviorSubj.getStockList().subscribe((res)=>{ 
      this.categoryBehaviorSubj.getCategoryList().subscribe((res2)=>{
        for (let i = 0; i < res2.length; i++) {
          for (let y = 0; y < res.length; y++) {
            if( res[y].catagoryId == res2[i].id){
              res[y].catagoryId = res2[i].categoryName
            }
          }
        }  
        this.dataSource = res
      } )
    } )
  }
  ngOnInit(): void {
    this.currentProduct.id  = '',
    this.currentProduct.productId  = '123,'
    this.currentProduct.catagoryId  = '',
    this.currentProduct.quantity  = 40,
    this.currentProduct.price  = 50,
    this.currentProduct.description  = 'Bufen lot 1'
    // this.currentProduct.expiryDate  = Date.now(),
    // this.currentProduct.manuDate  = Date.now(),
    this.currentProduct.userId  = '22d38441-b515-4a82-ae00-6207faa165b6'
  }

  categoryChange( event : any){
    this.currentProduct.catagoryId = event;
    console.log(this.currentProduct)
  }

  productNameChange( event : any){
    this.currentProduct.productId = this.validateInput(event.target.value);
    console.log(this.currentProduct)
  }


  quantityChange( event : any){
    this.currentProduct.quantity = this.validateInput(event.target.value);
    console.log(this.currentProduct)
  }

  salePriceChange( event : any){
    this.currentProduct.price = event;
    console.log(this.currentProduct)
  }

  descriptionChange( event : any){
    this.currentProduct.description = this.validateInput(event.target.value);
    console.log(this.currentProduct)
  }

  expiryDateChange( event : any){
    console.log(event)
    this.expiryDate = this.validateInput(event);
    this.currentProduct.expiryDate = this.expiryDate;
    console.log(this.currentProduct)
  }
  manuDateChange( event : any){
    console.log(event)
    this.manuDate = this.validateInput(event);
    this.currentProduct.manuDate = this.manuDate;
    console.log(this.currentProduct)
  }

  // PasswordChange( event : any){
  //   this.currentProduct.password = this.validateInput(event.target.value);
  //   console.log(this.currentProduct)
  // }

  validateInput(data: any){
    if(data){
      return data
    }else{
      return ""
    }
  }

  loadProduct(){
    this.stockService.loadStock();
  }


  register(){
    this.currentProduct.id = uuidv4()
    this.http.post('http://localhost:3000/stock/create',this.currentProduct).subscribe(res=>{
      this.loadProduct()
      this.clear()
    })
  }
  clear(){
    this.currentProduct = InitialStock.InitialStockObj();
  }

  deleteData(id: string){
    console.log(id)
    this.currentProduct.id = id
    this.http.post('http://localhost:3000/stock/delete',this.currentProduct).subscribe(
      (res) =>{
        this.loadProduct()
        this.clear()
      }
    )
  }

  updateData(id: string){
    console.log(id)
    this.currentProduct.userId = id
    this.http.post('http://localhost:3000/user/update',this.currentProduct).subscribe(
      (res) =>{
        this.loadProduct()
        this.clear()
      }
    )
  }
}