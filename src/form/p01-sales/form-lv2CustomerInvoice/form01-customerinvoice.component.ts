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
import { NgFor, NgIf } from '@angular/common';
import { CustomerInvoice, InitialCustomerInvoice } from 'src/shared/interface/P01Sales/Sales/CustomerInvoice';
import { CustomerBehaviorSubj } from 'src/shared/behaviorsubject/Customer';
import { CustomerService } from 'src/shared/services/S01Sales/S01_Customer';
import { Customer } from 'src/shared/interface/P01Sales/Customer/Customer';
import { AccountService } from 'src/shared/services/S04setting/S04_2Account';
import { AccountControl } from 'src/shared/interface/P04Setting/Account/AccountControl';
import { AccountControlBehaviorSubj } from 'src/shared/behaviorsubject/AccountConrtol';
import { CustomerInvoiceBehaviorSubj } from 'src/shared/behaviorsubject/CustomerInvoice';
import { CustomerInvoiceDetail, InitialCustomerInvoiceDetail } from 'src/shared/interface/P01Sales/Sales/CustomerInvoiceDetails';
import { DateFormatPipe } from "../../../shared/services/Pipe/DatePipte";
import Swal from 'sweetalert2';
import { catchError, throwError } from 'rxjs';
import { InitialTransaction, Transaction } from 'src/shared/interface/P07Transaction/Transaction';
import { CustomerInvoiceDetailBehaviorSubj } from 'src/shared/behaviorsubject/CustomerInvoiceDetail';
import { Product } from 'src/shared/interface/P05Stock/Product';
import { ProductBehaviorSubj } from 'src/shared/behaviorsubject/Product';


@Component({
  selector: 'app-form01-customerinvoice',
  templateUrl: './form01-customerinvoice.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, NgFor, NgIf, DateFormatPipe],
  styleUrls: ['./form01-customerinvoice.component.css']
})

export class Form01CustomerinvoiceComponent implements OnInit {

  title05 = 'Customer Invoice'
  // displayedColumns: string[] = ['id',
  //   // 'productId',
  //   'catagoryId','productName','quantity','salePrice','currentSalePrice','description',
  //   // 'expiryDate','manuDate','stockThresholdQty','userId'
  // ];
  currentCustomerInvoice: CustomerInvoice = InitialCustomerInvoice.InitialCustomerInvoiceObj()
  currentCustomerInvoiceDetail: CustomerInvoiceDetail = InitialCustomerInvoiceDetail.InitialCustomerInvoiceDetailObj()
  transaction: Transaction[] = []
  selectInvoice: string = ''
  selectInvoiceDetail: string = ''

  dataSource :CustomerInvoice[] = []
  dataSourceDetails :CustomerInvoiceDetail[] = []

  categoryDropDown: Category[] = []
  customerDropDown: Customer[] = []
  customerInvoiceDropdown: CustomerInvoice[] = []
  productDropDown: Product[] = []
  accountControlDropDown: AccountControl[] = []
  

  invoiceDate: Date = new Date
  manuDate: Date = new Date
  expDate: Date = new Date

  searchCustomerInvoice: CustomerInvoice[] = [];
  page:string = "list"
  subpage:string = ''

  displayedColumns: string[] = [ 'customerId',  'invoiceNo', 'title', 'totalAmount', 'date', 'description', 'userId', 'action'];
  displayedColumnsDetails: string[] = [ 'id', 'productId', 'saleQty', 'saleUnitPrice', 'action'];
 
  constructor(
    private http: HttpClient,
    private stockService: StockService,
    private customerService: CustomerService,
    private accountService: AccountService,

    private productBehaviorSubj: ProductBehaviorSubj,
    private categoryBehaviorSubj: CategoryBehaviorSubj,
    private customerBehaviorSubj: CustomerBehaviorSubj,
    private customerInvoiceBehaviorSubj: CustomerInvoiceBehaviorSubj,
    private customerInvoiceDetailBehaviorSubj: CustomerInvoiceDetailBehaviorSubj, 
    private accountControlBehaviorSubj: AccountControlBehaviorSubj,
  ) { 
    this.stockService.loadCategory();
    this.stockService.loadProduct();
    this.customerService.loadCustomerInvoice();
    this.customerService.loadCustomer();
    this.accountService.loadAccountControl();

    this.customerBehaviorSubj.getCustomerList().subscribe((res)=>{ this.customerDropDown = res})
    this.customerInvoiceBehaviorSubj.getCustomerInvoiceList().subscribe((res)=>{ this.dataSource = res })
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
    let date = new Date()
    let year = date.getFullYear();
    let month = date.getMonth() + 1 ;
    this.currentCustomerInvoice.id = '',
    this.currentCustomerInvoice.invoiceNo = 'INVS' + year + month
    this.currentCustomerInvoice.customerId = ''
    this.currentCustomerInvoice.date = new Date
    this.currentCustomerInvoice.title = 'Sale #1'
    this.currentCustomerInvoice.description = 'Sale #1'
    this.currentCustomerInvoice.userId  = '22d38441-b515-4a82-ae00-6207faa165b6'
 
    // this.currentCustomerInvoiceDetail.customerInvoiceId = this.currentCustomerInvoice.invoiceNo
    this.currentCustomerInvoiceDetail.saleQty = 10
    this.currentCustomerInvoiceDetail.saleUnitPrice = 100
  }

  customerChange( event : any){
    this.currentCustomerInvoice.customerId = event;
    console.log(this.currentCustomerInvoice)
  }

  productChange( event : any){
    this.currentCustomerInvoiceDetail.productId = event;
    console.log(this.currentCustomerInvoiceDetail)
  }

  invoiceNoChange( event : any){
    this.currentCustomerInvoice.invoiceNo = event.target.value;
    // this.currentCustomerInvoiceDetail.customerInvoiceId = this.currentCustomerInvoice.invoiceNo
    console.log(this.currentCustomerInvoice)
  }

  titleChange( event : any){
    this.currentCustomerInvoice.title = event.target.value;
    console.log(this.currentCustomerInvoice)
  }

  // categoryChange( event : any){
  //   this.currentCustomerInvoice.catagoryId = event;
  //   console.log(this.currentCustomerInvoice)
  // }

  descriptionChange( event : any){
    this.currentCustomerInvoice.description = this.validateInput(event.target.value);
    console.log(this.currentCustomerInvoice)
  }

  dateChange( event : any){
    console.log(event)
    this.invoiceDate = this.validateInput(event);
    this.currentCustomerInvoice.date = this.invoiceDate;
    console.log(this.currentCustomerInvoice)
  }

  dateManuChange( event : any){
    console.log(event)
    this.manuDate = this.validateInput(event);
    console.log(this.manuDate)
  }

  dateExpChange( event : any){
    console.log(event)
    this.expDate = this.validateInput(event);
    console.log(this.expDate)
  }

  saleQtyChange(event: any){
    this.currentCustomerInvoiceDetail.saleQty = parseInt(this.validateInput(event.target.value));
    console.log(this.currentCustomerInvoiceDetail)
  }

  
  saleUnitPriceChange(event: any){
    this.currentCustomerInvoiceDetail.saleUnitPrice = parseInt(this.validateInput(event.target.value));
    console.log(this.currentCustomerInvoiceDetail)
  }

  validateInput(data: any){
    if(data){
      return data
    }else{
      return ""
    }
  }

  loadCustomerInvoice(){
    this.customerService.loadCustomerInvoice();
  }


  register(){
    if(this.currentCustomerInvoice.id == ''|| this.currentCustomerInvoice.id == null){
      this.currentCustomerInvoice.id = uuidv4()
    }
    this.currentCustomerInvoiceDetail.customerInvoiceId = this.currentCustomerInvoice.id
    this.http.post('http://localhost:3000/customerinvoice/create',this.currentCustomerInvoice).subscribe(
      response => { this.loadCustomerInvoice() },
      error => {
        if(error.error.meta){
                Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
            }else{
                Swal.fire(JSON.stringify(error.name),error.message,'error')
            }
      }
  )
  }

  registerDetails(){
    this.transaction = [];
    this.currentCustomerInvoiceDetail.id = uuidv4()
    this.http.post('http://localhost:3000/customerinvoicedetail/create',this.currentCustomerInvoiceDetail).subscribe(
      res=>{
        this.loadCustomerInvoice()
        // this.clearDetails()
        this.loadInvoiceDetail()
      },error => {
        if(error.error.meta){
            Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
        }else{
            Swal.fire(JSON.stringify(error.name),error.message,'error')
        }
      }
    )
    this.transaction.push( this.setTransaction(this.currentCustomerInvoiceDetail.id, 'dr','Account Receivable','1','103','8ff68454-c507-4784-9b83-7f11c1c649d4') )
    this.transaction.push( this.setTransaction(this.currentCustomerInvoiceDetail.id, 'cr','Sale Revenue','4','401','8ff68454-c507-4784-9b83-7f11c1c649d4') )
    this.transaction.push( this.setTransaction(this.currentCustomerInvoiceDetail.id, 'dr','Cost of Goods Sold','5','502','8ff68454-c507-4784-9b83-7f11c1c649d4') )
    this.transaction.push( this.setTransaction(this.currentCustomerInvoiceDetail.id, 'cr','Inventory','1','104','8ff68454-c507-4784-9b83-7f11c1c649d4') )
    this.transaction.forEach(
      x => {
        this.http.post('http://localhost:3000/transaction/create',x).pipe(catchError(error => throwError(error))).subscribe(
          response => { 

          },
          error => {
            if(error.error.meta){
                Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
            }else{
                Swal.fire(JSON.stringify(error.name),error.message,'error')
            }
          }
        )
      }
    )
    // this.dataSourceDetails.push(this.currentCustomerInvoiceDetail)

        let stock = InitialStock.InitialStockObj();
        stock.id = uuidv4()
        stock.productId = this.currentCustomerInvoiceDetail.productId
        stock.status = "Sale"
        stock.quantity = this.currentCustomerInvoiceDetail.saleQty
        stock.price = this.currentCustomerInvoiceDetail.saleUnitPrice
        stock.description = ""
        stock.expiryDate = this.expDate
        stock.manuDate = this.manuDate
        stock.userId = this.currentCustomerInvoice.userId
        this.http.post('http://localhost:3000/stock/create',stock).subscribe(
          res=>{
            this.clear()
          },error => {
            if(error.error.meta){
                    Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
                }else{
                    Swal.fire(JSON.stringify(error.name),error.message,'error')
                }
          }
        )
  }

  clear(){
    this.currentCustomerInvoice = InitialCustomerInvoice.InitialCustomerInvoiceObj();
    this.currentCustomerInvoice.userId  = '22d38441-b515-4a82-ae00-6207faa165b6'
    this.dataSourceDetails = [];
  }

  clearDetails(){
    this.currentCustomerInvoiceDetail = InitialCustomerInvoiceDetail.InitialCustomerInvoiceDetailObj();
    if(this.selectInvoice) this.currentCustomerInvoiceDetail.customerInvoiceId = this.selectInvoice;
    // this.currentCustomerInvoiceDetail.customerInvoiceId = this.currentCustomerInvoice.invoiceNo;
  }

  deleteData(id: string){
    let body = this.dataSource.filter(x=>x.id == id)
    console.log(body)
    this.currentCustomerInvoice = body[0]
    this.http.post('http://localhost:3000/customerinvoice/delete',this.currentCustomerInvoice).subscribe(
      (res) =>{
        this.loadCustomerInvoice()
        this.clear()
        this.resetInvoice()
        this.dataSourceDetails = []
      }
    )
  }

  deleteDetailData(id: string, data: CustomerInvoiceDetail){
    this.http.post('http://localhost:3000/customerinvoicedetail/delete',data).subscribe(
      (res) =>{
        this.clearDetails()
        this.loadInvoiceDetail()
      }
    )
  }

  updateData(id: string){
    console.log(id)
    this.currentCustomerInvoice.userId = id
    this.http.post('http://localhost:3000/customerinvoice/update',this.currentCustomerInvoice).subscribe(
      (res) =>{
        this.loadCustomerInvoice()
        this.clear()
      }
    )
  }

  changePage(navPage: string) {
    this.page = navPage;
    this.subpage = ''
    this.loadCustomerInvoice()
  }

  setSubpage(subPage: string){
    this.subpage = subPage;
    if(subPage == 'detail') this.loadInvoiceDetail()
  }

  loadInvoiceDetail(){
    console.log(this.selectInvoice)
    if(this.selectInvoice === ''){
      this.customerService.loadCustomerInvoiceDetail(this.currentCustomerInvoice.id)
    }else{
      this.customerService.loadCustomerInvoiceDetail(this.selectInvoice)
    }
    this.customerInvoiceDetailBehaviorSubj.getCustomerInvoiceDetailList().subscribe((res) => this.dataSourceDetails = res)
  }

  clickCurrentInvoice(id: string, rowData: CustomerInvoice){
    if(this.selectInvoice == id)  {
      this.resetInvoice()
      this.dataSourceDetails = []
    }
    else{
      this.selectInvoice = id
      this.currentCustomerInvoice = rowData
      this.currentCustomerInvoiceDetail.customerInvoiceId = this.currentCustomerInvoice.id
      this.dataSourceDetails = rowData.customerInvoiceDetail

    }
  }

  resetInvoice(){
    this.selectInvoice = ''
    this.currentCustomerInvoice = InitialCustomerInvoice.InitialCustomerInvoiceObj()
    this.currentCustomerInvoiceDetail = InitialCustomerInvoiceDetail.InitialCustomerInvoiceDetailObj()
  }

  clickCurrentDetail(id: string, rowData: CustomerInvoiceDetail){
    if(this.selectInvoiceDetail == id){
      this.selectInvoiceDetail = ''
      this.clearDetails()
    }else{
      this.selectInvoiceDetail = id
      this.currentCustomerInvoiceDetail = rowData
    }
    console.log(id, 'page', this.selectInvoiceDetail)
  }

  setTransaction(invoiceDetailsId: string, acctype: string, title: string, accHead: string, accControl: string, year: string){
    let transaction = InitialTransaction.InitialTransactionObj(); 
    transaction.id = uuidv4()
    transaction.financialYearId = year
    transaction.accountHeadCode = accHead
    transaction.accountControlCode = accControl
    transaction.invoiceNo = this.currentCustomerInvoice.invoiceNo 
    transaction.invoiceDetailsId = invoiceDetailsId
    transaction.userId = this.currentCustomerInvoice.userId
    if(acctype == 'dr'){
      transaction.debit = this.currentCustomerInvoiceDetail.saleQty * this.currentCustomerInvoiceDetail.saleUnitPrice
    } else{
      transaction.credit = this.currentCustomerInvoiceDetail.saleQty * this.currentCustomerInvoiceDetail.saleUnitPrice
    }
    transaction.transactionTitle = title
    transaction.transactionDate = this.currentCustomerInvoice.date
    transaction.description = `${this.title05}: ${title} ${this.currentCustomerInvoice.id}`
    return transaction
  }

  getName(value: string, field: string){
    if(field == 'customer'){
      for (let i = 0; i < this.customerDropDown.length; i++) {
        if( this.customerDropDown[i].customerId == value ) return this.customerDropDown[i].customerName
      }
    }
    if(field == 'product'){
      for (let i = 0; i < this.productDropDown.length; i++) {
        if( this.productDropDown[i].id == value ) return this.productDropDown[i].productName
      }
    }
    return 'No Data'
  }
}