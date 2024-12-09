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
import { InitialSupplierInvoiceDetail, SupplierInvoiceDetail } from 'src/shared/interface/P03Purchases/Purchase/SupplierInvoiceDetail';
import { SupplierInvoiceDetailBehaviorSubj } from 'src/shared/behaviorsubject/SupplierInvoiceDetail';
import { DateFormatPipe } from "../../../shared/services/Pipe/DatePipte";
import Swal from 'sweetalert2';
import { catchError, throwError } from 'rxjs';


@Component({
  selector: 'app-form03-payment',
  templateUrl: './form03-payment.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, NgFor, NgIf, DateFormatPipe],
  styleUrls: ['./form03-payment.component.css']
})

export class Form03PaymentComponent implements OnInit {

  title05 = 'Supplier Payment'
  // displayedColumns: string[] = ['id',
  //   // 'productId',
  //   'catagoryId','productName','quantity','salePrice','currentPurchasePrice','description',
  //   // 'expiryDate','manuDate','stockThresholdQty','userId'
  // ];
  currentSupplierInvoice: SupplierInvoice = InitialSupplierInvoice.InitialSupplierInvoiceObj()
  currentSupplierInvoiceDetail: SupplierInvoiceDetail = InitialSupplierInvoiceDetail.InitialSupplierInvoiceDetailObj()
  selectInvoice: string = ''
  selectInvoiceDetail: string = ''

  dataSource :SupplierInvoice[] = []
  dataSourceDetails :SupplierInvoiceDetail[] = []

  categoryDropDown: Category[] = []
  supplierDropDown: Supplier[] = []
  supplierInvoiceDropdown: SupplierInvoice[] = []
  productDropDown: Product[] = []
  accountControlDropDown: AccountControl[] = []
  

  invoiceDate: Date = new Date

  searchSupplierInvoice: SupplierInvoice[] = [];
  page:string = "list"
  subpage:string = ''

  displayedColumns: string[] = [ 'supplierId',  'invoiceNo', 'title', 'totalAmount', 'date', 'description', 'userId', 'action'];
  displayedColumnsDetails: string[] = [ 'productId',  'supplierInvoiceId', 'purchaseQty', 'purchaseUnitPrice', 'action'];
 

  constructor(
    private http: HttpClient,
    private stockService: StockService,
    private supplierService: SupplierService,
    private accountService: AccountService,

    private productBehaviorSubj: ProductBehaviorSubj,
    private categoryBehaviorSubj: CategoryBehaviorSubj,
    private supplierBehaviorSubj: SupplierBehaviorSubj,
    private supplierInvoiceBehaviorSubj: SupplierInvoiceBehaviorSubj,
    private supplierInvoiceDetailBehaviorSubj: SupplierInvoiceDetailBehaviorSubj, 
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
 
    // this.currentSupplierInvoiceDetail.supplierInvoiceId = this.currentSupplierInvoice.invoiceNo
    this.currentSupplierInvoiceDetail.purchaseQty = 10
    this.currentSupplierInvoiceDetail.purchaseUnitPrice = 100
  }

  supplierChange( event : any){
    this.currentSupplierInvoice.supplierId = event;
    console.log(this.currentSupplierInvoice)
  }

  productChange( event : any){
    this.currentSupplierInvoiceDetail.productId = event;
    console.log(this.currentSupplierInvoiceDetail)
  }

  invoiceNoChange( event : any){
    this.currentSupplierInvoice.invoiceNo = event.target.value;
    // this.currentSupplierInvoiceDetail.supplierInvoiceId = this.currentSupplierInvoice.invoiceNo
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


  purchaseQtyChange(event: any){
    this.currentSupplierInvoiceDetail.purchaseQty = parseInt(this.validateInput(event.target.value));
    console.log(this.currentSupplierInvoiceDetail)
  }

  
  purchaseUnitPriceChange(event: any){
    this.currentSupplierInvoiceDetail.purchaseUnitPrice = parseInt(this.validateInput(event.target.value));
    console.log(this.currentSupplierInvoiceDetail)
  }

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
    if(this.currentSupplierInvoice.id == ''|| this.currentSupplierInvoice.id == null){
      this.currentSupplierInvoice.id = uuidv4()
    }
    this.currentSupplierInvoiceDetail.supplierInvoiceId = this.currentSupplierInvoice.id
    this.http.post('http://localhost:3000/supplierinvoice/create',this.currentSupplierInvoice).pipe(catchError(error => throwError(error))).subscribe(
      response => { this.loadSupplierInvoice() },
      error => {
        Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
      }
  )
  }

  registerDetails(){
    this.currentSupplierInvoiceDetail.id = uuidv4()
    this.http.post('http://localhost:3000/supplierinvoicedetail/create',this.currentSupplierInvoiceDetail).subscribe(res=>{
      this.loadSupplierInvoice()
      // this.clearDetails()
      this.loadInvoiceDetail()
    })
    // this.dataSourceDetails.push(this.currentSupplierInvoiceDetail)
  }

  clear(){
    this.currentSupplierInvoice = InitialSupplierInvoice.InitialSupplierInvoiceObj();
    this.currentSupplierInvoice.userId  = '22d38441-b515-4a82-ae00-6207faa165b6'
    this.dataSourceDetails = [];
  }

  clearDetails(){
    this.currentSupplierInvoiceDetail = InitialSupplierInvoiceDetail.InitialSupplierInvoiceDetailObj();
    if(this.selectInvoice) this.currentSupplierInvoiceDetail.supplierInvoiceId = this.selectInvoice;
    // this.currentSupplierInvoiceDetail.supplierInvoiceId = this.currentSupplierInvoice.invoiceNo;
  }

  deleteData(id: string){
    let body = this.dataSource.filter(x=>x.id == id)
    console.log(body)
    this.currentSupplierInvoice = body[0]
    this.http.post('http://localhost:3000/supplierinvoice/delete',this.currentSupplierInvoice).subscribe(
      (res) =>{
        this.loadSupplierInvoice()
        this.clear()
        this.resetInvoice()
        this.dataSourceDetails = []
      }
    )
  }

  deleteDetailData(id: string, data: SupplierInvoiceDetail){
    this.http.post('http://localhost:3000/supplierinvoicedetail/delete',data).subscribe(
      (res) =>{
        this.clearDetails()
        this.loadInvoiceDetail()
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
    this.subpage = ''
    this.loadSupplierInvoice()
  }

  setSubpage(subPage: string){
    this.subpage = subPage;
    if(subPage == 'detail') this.loadInvoiceDetail()
  }

  loadInvoiceDetail(){
    if(this.selectInvoice === ''){
      this.supplierService.loadSupplierInvoiceDetail(this.currentSupplierInvoice.id)
    }else{
      this.supplierService.loadSupplierInvoiceDetail(this.selectInvoice)
    }
    this.supplierInvoiceDetailBehaviorSubj.getSupplierInvoiceDetailList().subscribe((res) => this.dataSourceDetails = res)
  }

  clickCurrentInvoice(id: string, rowData: SupplierInvoice){
    if(this.selectInvoice == id)  {
      this.resetInvoice()
      this.dataSourceDetails = []
    }
    else{
      this.selectInvoice = id
      this.currentSupplierInvoice = rowData
      this.currentSupplierInvoiceDetail.supplierInvoiceId = this.currentSupplierInvoice.id
      this.dataSourceDetails = rowData.supplierInvoiceDetail

    }
  }

  resetInvoice(){
    this.selectInvoice = ''
    this.currentSupplierInvoice = InitialSupplierInvoice.InitialSupplierInvoiceObj()
    this.currentSupplierInvoiceDetail = InitialSupplierInvoiceDetail.InitialSupplierInvoiceDetailObj()
  }

  clickCurrentDetail(id: string, rowData: SupplierInvoiceDetail){
    if(this.selectInvoiceDetail == id){
      this.selectInvoiceDetail = ''
      this.clearDetails()
    }else{
      this.selectInvoiceDetail = id
      this.currentSupplierInvoiceDetail = rowData
    }
    console.log(id, 'page', this.selectInvoiceDetail)
  }
}