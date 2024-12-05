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
import { ProductBehaviorSubj } from 'src/shared/behaviorsubject/Product';
import { Product, InitialProduct } from 'src/shared/interface/P05Stock/Product';
import { StockService } from 'src/shared/services/S05Stocks/S05_Category';
import { CategoryBehaviorSubj } from 'src/shared/behaviorsubject/Category';
import { v4 as uuidv4 } from 'uuid';
import { NgFor } from '@angular/common';
import { SupplierInvoice } from 'src/shared/interface/P03Purchases/Purchase/SupplierInvoice';
import { SupplierBehaviorSubj } from 'src/shared/behaviorsubject/Supplier';
import { SupplierService } from 'src/shared/services/S03Purchase/S03_Supplier';
import { Supplier } from 'src/shared/interface/P03Purchases/Supplier/Supplier';
import { AccountService } from 'src/shared/services/S04setting/S04_2Account';
import { AccountControl } from 'src/shared/interface/P04Setting/Account/AccountControl';
import { AccountControlBehaviorSubj } from 'src/shared/behaviorsubject/AccountConrtol';

@Component({
  selector: 'app-form03-supplierinvoice',
  templateUrl: './form03-supplierinvoice.component.html',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, NgFor ],
  styleUrls: ['./form03-supplierinvoice.component.css']
})

export class Form03SupplierinvoiceComponent implements OnInit {

  title05 = 'Supplier Invoice'
  displayedColumns: string[] = ['id',
    // 'productId',
    'catagoryId','productName','quantity','salePrice','currentPurchasePrice','description',
    // 'expiryDate','manuDate','stockThresholdQty','userId'
  ];
  // dataSource :SupplierInvoice[] = []
  categoryDropDown: Category[] = []
  supplierDropDown: Supplier[] = []
  productDropDown: Product[] = []
  accountControlDropDown: AccountControl[] = []
  
  currentProduct: Product = InitialProduct.InitialProductObj()
  manuDate: Date = new Date
  expiryDate: Date = new Date
  constructor(
    private http: HttpClient,
    private stockService: StockService,
    private supplierService: SupplierService,
    private accountService: AccountService,
    private productBehaviorSubj: ProductBehaviorSubj,
    private categoryBehaviorSubj: CategoryBehaviorSubj,
    private supplierBehaviorSubj: SupplierBehaviorSubj,
    private accountControlBehaviorSubj: AccountControlBehaviorSubj,
  ) { 
    this.stockService.loadCategory();
    this.stockService.loadProduct();
    this.supplierService.loadSupplierInvoice();
    this.supplierService.loadSupplier();
    this.accountService.loadAccountControl();

    this.supplierBehaviorSubj.getSupplierList().subscribe((res)=>{ this.supplierDropDown = res})
    this.categoryBehaviorSubj.getCategoryList().subscribe((res)=>{ this.categoryDropDown = res  } )
    this.productBehaviorSubj.getProductList().subscribe((res)=>{ this.productDropDown = res })
    this.accountControlBehaviorSubj.getAccountControlList().subscribe((res)=>{ this.accountControlDropDown = res})
    //   this.categoryBehaviorSubj.getCategoryList().subscribe((res2)=>{
    //     for (let i = 0; i < res2.length; i++) {
    //       for (let y = 0; y < res.length; y++) {
    //         if( res[y].catagoryId == res2[i].id){
    //           res[y].catagoryId = res2[i].categoryName
    //         }
    //       }
    //     }  
    //     this.dataSource = res
    //   } )
    // } )
  }
  ngOnInit(): void {
    this.currentProduct.id  = '',
    this.currentProduct.productId  = '123,'
    this.currentProduct.catagoryId  = '',
    this.currentProduct.productName  = 'Bufen'
    this.currentProduct.quantity  = 40,
    this.currentProduct.salePrice  = 50,
    this.currentProduct.currentPurchasePrice  = 30,
    this.currentProduct.description  = 'Bufen lot 1'
    // this.currentProduct.expiryDate  = Date.now(),
    // this.currentProduct.manuDate  = Date.now(),
    this.currentProduct.stockThresholdQty  = 10,
    this.currentProduct.userId  = '22d38441-b515-4a82-ae00-6207faa165b6'
  }

  categoryChange( event : any){
    this.currentProduct.catagoryId = event;
    console.log(this.currentProduct)
  }

  productNameChange( event : any){
    this.currentProduct.productName = this.validateInput(event.target.value);
    console.log(this.currentProduct)
  }

  currentPriceChange( event : any){
    this.currentProduct.currentPurchasePrice = this.validateInput(event.target.value);
    console.log(this.currentProduct)
  }

  quantityChange( event : any){
    this.currentProduct.quantity = this.validateInput(event.target.value);
    console.log(this.currentProduct)
  }

  thresholdChange( event : any){
    this.currentProduct.stockThresholdQty = event;
    console.log(this.currentProduct)
  }

  salePriceChange( event : any){
    this.currentProduct.salePrice = event;
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
    this.stockService.loadProduct();
  }


  register(){
    this.currentProduct.id = uuidv4()
    this.http.post('http://localhost:3000/product/create',this.currentProduct).subscribe(res=>{
      this.loadProduct()
      this.clear()
    })
  }
  clear(){
    this.currentProduct = InitialProduct.InitialProductObj();
  }

  deleteData(id: string){
    console.log(id)
    this.currentProduct.id = id
    this.http.post('http://localhost:3000/product/delete',this.currentProduct).subscribe(
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