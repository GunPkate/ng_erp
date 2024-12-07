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
import { NgFor, NgIf } from '@angular/common';
import { InitialSupplierInvoice, SupplierInvoice } from 'src/shared/interface/P03Purchases/Purchase/SupplierInvoice';
import { SupplierBehaviorSubj } from 'src/shared/behaviorsubject/Supplier';
import { SupplierService } from 'src/shared/services/S03Purchase/S03_Supplier';
import { Supplier } from 'src/shared/interface/P03Purchases/Supplier/Supplier';
import { AccountService } from 'src/shared/services/S04setting/S04_2Account';
import { AccountControl } from 'src/shared/interface/P04Setting/Account/AccountControl';
import { AccountControlBehaviorSubj } from 'src/shared/behaviorsubject/AccountConrtol';
import { SupplierInvoiceBehaviorSubj } from 'src/shared/behaviorsubject/SupplierInvoice';

@Component({
  selector: 'app-form03-supplierinvoice',
  templateUrl: './form03-supplierinvoice.component.html',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, NgFor, NgIf ],
  styleUrls: ['./form03-supplierinvoice.component.css']
})

export class Form03SupplierinvoiceComponent implements OnInit {

  title05 = 'Supplier Invoice'
  // displayedColumns: string[] = ['id',
  //   // 'productId',
  //   'catagoryId','productName','quantity','salePrice','currentPurchasePrice','description',
  //   // 'expiryDate','manuDate','stockThresholdQty','userId'
  // ];
  dataSource :SupplierInvoice[] = []
  categoryDropDown: Category[] = []
  supplierDropDown: Supplier[] = []
  supplierInvoiceDropdown: SupplierInvoice[] = []
  productDropDown: Product[] = []
  accountControlDropDown: AccountControl[] = []
  
  currentSupplierInvoice: SupplierInvoice = InitialSupplierInvoice.InitialSupplierInvoiceObj()
  invoiceDate: Date = new Date

  searchSupplierInvoice: SupplierInvoice[] = [];
  page:string = "list"

  displayedColumns: string[] = ['id', 'supplierId',  'invoiceNo', 'title', 'totalAmount', 'date', 'description', 'userId',];
 

  constructor(
    private http: HttpClient,
    private stockService: StockService,
    private supplierService: SupplierService,
    private accountService: AccountService,

    private productBehaviorSubj: ProductBehaviorSubj,
    private categoryBehaviorSubj: CategoryBehaviorSubj,
    private supplierBehaviorSubj: SupplierBehaviorSubj,
    private supplierInvoiceBehaviorSubj: SupplierInvoiceBehaviorSubj, 
    private accountControlBehaviorSubj: AccountControlBehaviorSubj,
  ) { 
    this.stockService.loadCategory();
    this.stockService.loadProduct();
    this.supplierService.loadSupplierInvoice();
    this.supplierService.loadSupplier();
    this.accountService.loadAccountControl();

    this.supplierBehaviorSubj.getSupplierList().subscribe((res)=>{ this.supplierDropDown = res})
    this.supplierInvoiceBehaviorSubj.getSupplierInvoiceList().subscribe((res)=>{ this.dataSource = res })
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
    this.currentSupplierInvoice.id = '',
    this.currentSupplierInvoice.invoiceNo = 'INV123'
    this.currentSupplierInvoice.supplierId = ''
    this.currentSupplierInvoice.date = new Date
    this.currentSupplierInvoice.title = 'Purchase #1'
    this.currentSupplierInvoice.description = 'Purchase #1'
    this.currentSupplierInvoice.userId  = '22d38441-b515-4a82-ae00-6207faa165b6'
  }

  supplierChange( event : any){
    this.currentSupplierInvoice.supplierId = event;
    console.log(this.currentSupplierInvoice)
  }

  invoiceNoChange( event : any){
    this.currentSupplierInvoice.invoiceNo = event.target.value;
    console.log(this.currentSupplierInvoice)
  }

  titleChange( event : any){
    this.currentSupplierInvoice.title = event.target.value;
    console.log(this.currentSupplierInvoice)
  }

  // categoryChange( event : any){
  //   this.currentSupplierInvoice.catagoryId = event;
  //   console.log(this.currentSupplierInvoice)
  // }

  descriptionChange( event : any){
    this.currentSupplierInvoice.description = this.validateInput(event.target.value);
    console.log(this.currentSupplierInvoice)
  }

  dateChange( event : any){
    console.log(event)
    this.invoiceDate = this.validateInput(event);
    this.currentSupplierInvoice.date = this.invoiceDate;
    console.log(this.currentSupplierInvoice)
  }

  // PasswordChange( event : any){
  //   this.currentSupplierInvoice.password = this.validateInput(event.target.value);
  //   console.log(this.currentSupplierInvoice)
  // }

  validateInput(data: any){
    if(data){
      return data
    }else{
      return ""
    }
  }

  loadSupplierInvoice(){
    this.supplierService.loadSupplierInvoice();
  }


  register(){
    this.currentSupplierInvoice.id = uuidv4()
    this.http.post('http://localhost:3000/supplierinvoice/create',this.currentSupplierInvoice).subscribe(res=>{
      this.loadSupplierInvoice()
      this.clear()
      this.changePage('list')
    })
  }
  clear(){
    this.currentSupplierInvoice = InitialSupplierInvoice.InitialSupplierInvoiceObj();
  }

  deleteData(id: string){
    let body = this.dataSource.filter(x=>x.id == id)
    console.log(body)
    this.currentSupplierInvoice = body[0]
    this.http.post('http://localhost:3000/supplierinvoice/delete',this.currentSupplierInvoice).subscribe(
      (res) =>{
        this.loadSupplierInvoice()
        this.clear()
      }
    )
  }

  updateData(id: string){
    console.log(id)
    this.currentSupplierInvoice.userId = id
    this.http.post('http://localhost:3000/supplierinvoice/update',this.currentSupplierInvoice).subscribe(
      (res) =>{
        this.loadSupplierInvoice()
        this.clear()
      }
    )
  }

  changePage(navPage: string) {
    this.page = navPage;
    this.loadSupplierInvoice()
  }
}