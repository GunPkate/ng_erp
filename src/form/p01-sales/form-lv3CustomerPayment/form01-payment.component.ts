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
import { NgIf } from '@angular/common';
import { CustomerBehaviorSubj } from 'src/shared/behaviorsubject/Customer';
import { AccountService } from 'src/shared/services/S04setting/S04_2Account';
import { AccountControl } from 'src/shared/interface/P04Setting/Account/AccountControl';
import { AccountControlBehaviorSubj } from 'src/shared/behaviorsubject/AccountConrtol';
import { CustomerInvoiceBehaviorSubj } from 'src/shared/behaviorsubject/CustomerInvoice';
import { CustomerInvoiceDetailBehaviorSubj } from 'src/shared/behaviorsubject/CustomerInvoiceDetail';
import { DateFormatPipe } from "../../../shared/services/Pipe/DatePipte";
import Swal from 'sweetalert2';
import { catchError, throwError } from 'rxjs';
import { CustomerPaymentBehaviorSubj } from 'src/shared/behaviorsubject/CustomerInvoicePayment';
import { Transaction,InitialTransaction } from 'src/shared/interface/P07Transaction/Transaction';
import { Customer } from 'src/shared/interface/P01Sales/Customer/Customer';
import { CustomerInvoice, InitialCustomerInvoice } from 'src/shared/interface/P01Sales/Sales/CustomerInvoice';
import { CustomerInvoiceDetail } from 'src/shared/interface/P01Sales/Sales/CustomerInvoiceDetails';
import { CustomerPayment, InitialCustomerPayment } from 'src/shared/interface/P01Sales/Sales/CustomerPayment';
import { CustomerService } from 'src/shared/services/S01Sales/S01_Customer';


@Component({
  selector: 'app-form01-payment',
  templateUrl: './form01-payment.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, NgIf, DateFormatPipe],
  styleUrls: ['./form01-payment.component.css']
})

export class Form01PaymentComponent implements OnInit {

  title05 = 'Customer Payment'

  currentCustomerInvoice: CustomerInvoice = InitialCustomerInvoice.InitialCustomerInvoiceObj()
  currentCustomerPayment: CustomerPayment = InitialCustomerPayment.InitialCustomerPaymentObj()
  transaction: Transaction[] = []

  selectInvoice: string = ''
  selectInvoiceDetail: string = ''
  selectPayment: string = ''
  selectName: string = '';

  dataSource :CustomerInvoice[] = []
  dataSourceDetails :CustomerInvoiceDetail[] = []
  dataSourcePayment :CustomerPayment[] = []

  categoryDropDown: Category[] = []
  customerDropDown: Customer[] = []
  customerInvoiceDropdown: CustomerInvoice[] = []
  productDropDown: Product[] = []
  accountControlDropDown: AccountControl[] = []

  invoiceDate: Date = new Date

  searchCustomerInvoice: CustomerInvoice[] = [];
  page:string = "list"
  subpage:string = ''

  displayedColumns: string[] = [ 'customerId',  'invoiceNo', 'title', 'totalAmount', 'date', 'description', 'userId', 'action'];
  displayedColumnsDetails: string[] = [ 'id', 'productId', 'saleQty', 'saleUnitPrice'];
  displayedColumnsPayment: string[] = [ 'paymentId', 'customerId', 'customerInvoiceNo', 'invoiceNo', 'totalAmount', 'paymentAmount', 'remainBalance', 'date', 'userId', 'action']; 

  validate: string[] = []

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
    private customerPaymentBehaviorSubj: CustomerPaymentBehaviorSubj, 
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
  }
  ngOnInit(): void {
  }

  customerChange( event : any){
    this.currentCustomerInvoice.customerId = event;
    console.log(this.currentCustomerInvoice)
  }


  invoiceNoChange( event : any){
    this.currentCustomerInvoice.invoiceNo = event.target.value;
    console.log(this.currentCustomerInvoice)
  }

  titleChange( event : any){
    this.currentCustomerInvoice.title = event.target.value;
    console.log(this.currentCustomerInvoice)
  }

  paymentAmountChange( event : any){
    this.currentCustomerPayment.paymentAmount = this.validateInput(event.target.value);
    console.log(this.currentCustomerPayment)
  }

  dateChange( event : any){
    console.log(event)
    this.invoiceDate = this.validateInput(event);
    this.currentCustomerPayment.date = this.invoiceDate;
    console.log(this.currentCustomerInvoice)
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

  loadCustomerPayment(){
    this.customerService.loadCustomerInvoicePayment(this.selectPayment);
    this.customerPaymentBehaviorSubj.getCustomerPaymentList().subscribe(x=>this.dataSourcePayment = x)
  }


  register(){
    if(this.currentCustomerPayment.paymentId == ''|| this.currentCustomerPayment.paymentId == null){
      this.currentCustomerPayment.paymentId = uuidv4()
    }
    this.http.post('http://localhost:3000/customerpayment/create',this.currentCustomerPayment).pipe(catchError(error => throwError(error))).subscribe(
      response => { 
        this.currentCustomerPayment.paymentId == ''
        this.loadCustomerPayment();
        this.resetPayment();
      },
      error => {
        if(error.error.meta){
                Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
            }else{
                Swal.fire(JSON.stringify(error.name),error.message,'error')
            }
      }
    )
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
  }

  clear(){
    this.currentCustomerInvoice = InitialCustomerInvoice.InitialCustomerInvoiceObj();
    this.currentCustomerInvoice.userId  = '22d38441-b515-4a82-ae00-6207faa165b6'
    this.dataSourceDetails = [];
    this.dataSourcePayment = [];
  }

  deletePaymentData(id: string, data: CustomerPayment){
    this.http.post('http://localhost:3000/customerpayment/delete',data).subscribe(
      (res) =>{
        this.loadCustomerPayment()
        this.validate = []
      }
    )
  }

  updateData(id: string){
    console.log(id)
    this.currentCustomerInvoice.userId = id
    this.http.post('http://localhost:3000/customerpayment/update',this.currentCustomerInvoice).subscribe(
      (res) =>{
        this.loadCustomerInvoice()
        this.clear()
      }
    )
  }

  changePage(navPage: string) {
    this.page = navPage;
    this.subpage = ''
    this.customerService.loadCustomerInvoicePayment(this.selectPayment);
    this.loadCustomerInvoice()
    if(navPage == 'new') this.loadCustomerPayment()
    if(this.currentCustomerPayment.paymentAmount == 0) this.validate.push('No Payment value')
  }


  loadInvoiceDetail(){
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
      this.dataSourcePayment = []
      this.selectPayment = ''
    }
    else{
      this.selectInvoice = id
      this.selectPayment = rowData.invoiceNo
      // this.currentCustomerInvoice = rowData
      this.dataSourceDetails = rowData.customerInvoiceDetail
      this.selectName = rowData.customerId
      // console.log(this.customerDropDown)
      this.setInitiaPayment(rowData)
    }
  }

  setInitiaPayment(rowData: CustomerInvoice){
    this.currentCustomerPayment.paymentId = ''
    this.currentCustomerPayment.customerId = rowData.customerId
    this.currentCustomerPayment.customerInvoiceNo = rowData.invoiceNo
    this.currentCustomerPayment.userId = rowData.userId
    this.currentCustomerPayment.invoiceNo = ''
    this.currentCustomerPayment.totalAmount = 0
    this.currentCustomerPayment.paymentAmount = 0
    this.currentCustomerPayment.remainBalance = 0
    this.currentCustomerPayment.date = new Date
  }

  setTransaction(acctype: string, title: string, accHead: string, accControl: string, year: string){
    let transaction = InitialTransaction.InitialTransactionObj(); 
    transaction.id = uuidv4()
    transaction.financialYearId = year
    transaction.accountHeadCode = accHead
    transaction.accountControlCode = accControl 
    transaction.invoiceNo = this.currentCustomerPayment.customerInvoiceNo 
    transaction.userId = this.currentCustomerPayment.userId
    if(acctype == 'dr'){
      transaction.debit = this.currentCustomerPayment.paymentAmount
    } else{
      transaction.credit = this.currentCustomerPayment.paymentAmount
    }
    transaction.transactionTitle = title
    transaction.transactionDate = this.currentCustomerPayment.date
    transaction.description = this.title05+ ":" + title
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
        if( this.productDropDown[i].productId == value ) return this.productDropDown[i].productName
      }
    }
    return 'No Data'
  }

  resetInvoice(){
    this.selectInvoice = ''
    this.selectPayment = ''
    this.currentCustomerInvoice = InitialCustomerInvoice.InitialCustomerInvoiceObj()
  }

  clickCurrentPayment(id: string, rowData: CustomerInvoiceDetail){
    this.transaction = []
    this.validate = []
    let sum = 0; 
    this.dataSourceDetails.forEach(x => sum += x.saleQty * x.saleUnitPrice)
    if(this.dataSourcePayment.length > 0){
      this.dataSourcePayment.forEach(x => sum -= x.paymentAmount)
    }

    this.dataSourcePayment.forEach(x=>
      {
        if(x.invoiceNo == id)  this.validate.push('Duplicated InvoiceNo')
      }
    )
    this.checkValidate();
    console.log(this.validate)

    if(this.selectInvoiceDetail == id){
      this.resetPayment();
    }else{
      this.selectInvoiceDetail = id
      this.currentCustomerPayment.paymentAmount = rowData.saleQty * rowData.saleUnitPrice
      this.currentCustomerPayment.remainBalance = sum - this.currentCustomerPayment.paymentAmount
      this.currentCustomerPayment.totalAmount = sum
      this.currentCustomerPayment.invoiceNo = rowData.id
      this.currentCustomerPayment.userId = '22d38441-b515-4a82-ae00-6207faa165b6'

      this.transaction.push( this.setTransaction('dr','Cash Received','1','101','8ff68454-c507-4784-9b83-7f11c1c649d4') )
      this.transaction.push( this.setTransaction('cr','Account Receivable','1','103','8ff68454-c507-4784-9b83-7f11c1c649d4') )
      console.log('this.transaction',this.transaction)
    }

  }

  resetPayment(){
    this.selectInvoiceDetail = ''
    this.currentCustomerPayment.totalAmount = 0;
    this.currentCustomerPayment.paymentAmount = 0;
    this.currentCustomerPayment.remainBalance = 0;
    this.currentCustomerPayment.invoiceNo = ''
  }

  checkValidate(){
    if(this.validate.length > 0) {
      this.validate.forEach(x => Swal.fire(x,x,'warning'))
    }
  }
}