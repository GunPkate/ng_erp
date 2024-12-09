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
import { InitialSupplierPayment, SupplierPayment } from 'src/shared/interface/P03Purchases/Purchase/SupplierPayment';
import { SupplierPaymentBehaviorSubj } from 'src/shared/behaviorsubject/SupplierInvoicePayment';


@Component({
  selector: 'app-form03-payment',
  templateUrl: './form03-payment.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, NgFor, NgIf, DateFormatPipe],
  styleUrls: ['./form03-payment.component.css']
})

export class Form03PaymentComponent implements OnInit {

  title05 = 'Supplier Payment'

  currentSupplierInvoice: SupplierInvoice = InitialSupplierInvoice.InitialSupplierInvoiceObj()
  currentSupplierPayment: SupplierPayment = InitialSupplierPayment.InitialSupplierPaymentObj()

  selectInvoice: string = ''
  selectInvoiceDetail: string = ''
  selectPayment: string = ''
  selectName: string = '';

  dataSource :SupplierInvoice[] = []
  dataSourceDetails :SupplierInvoiceDetail[] = []
  dataSourcePayment :SupplierPayment[] = []

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
  displayedColumnsDetails: string[] = [ 'productId',  'supplierInvoiceId', 'purchaseQty', 'purchaseUnitPrice'];
  displayedColumnsPayment: string[] = [ 'paymentId', 'supplierId', 'supplierInvoiceNo', 'invoiceNo', 'totalAmount', 'paymentAmount', 'remainBalance', 'date', 'userId', 'action']; 

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
    private supplierPaymentBehaviorSubj: SupplierPaymentBehaviorSubj, 
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
  }
  ngOnInit(): void {
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

  paymentAmountChange( event : any){
    this.currentSupplierPayment.paymentAmount = this.validateInput(event.target.value);
    console.log(this.currentSupplierPayment)
  }

  dateChange( event : any){
    console.log(event)
    this.invoiceDate = this.validateInput(event);
    this.currentSupplierPayment.date = this.invoiceDate;
    console.log(this.currentSupplierInvoice)
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

  loadSupplierPayment(){
    this.supplierService.loadSupplierInvoicePayment(this.selectPayment);
    this.supplierPaymentBehaviorSubj.getSupplierPaymentList().subscribe(x=>this.dataSourcePayment = x)
  }


  register(){
    if(this.currentSupplierPayment.paymentId == ''|| this.currentSupplierPayment.paymentId == null){
      this.currentSupplierPayment.paymentId = uuidv4()
    }

    this.http.post('http://localhost:3000/supplierpayment/create',this.currentSupplierPayment).pipe(catchError(error => throwError(error))).subscribe(
      response => { 
        this.currentSupplierPayment.paymentId == ''
        this.loadSupplierPayment()
      },
      error => {
        Swal.fire(JSON.stringify(error.error.meta.target),error.error.error,'error')
      }
  )
  }

  clear(){
    this.currentSupplierInvoice = InitialSupplierInvoice.InitialSupplierInvoiceObj();
    this.currentSupplierInvoice.userId  = '22d38441-b515-4a82-ae00-6207faa165b6'
    this.dataSourceDetails = [];
    this.dataSourcePayment = [];
  }

  deletePaymentData(id: string, data: SupplierPayment){
    this.http.post('http://localhost:3000/supplierpayment/delete',data).subscribe(
      (res) =>{
        this.loadSupplierPayment()
      }
    )
  }

  updateData(id: string){
    console.log(id)
    this.currentSupplierInvoice.userId = id
    this.http.post('http://localhost:3000/supplierpayment/update',this.currentSupplierInvoice).subscribe(
      (res) =>{
        this.loadSupplierInvoice()
        this.clear()
      }
    )
  }

  changePage(navPage: string) {
    this.page = navPage;
    this.subpage = ''
    this.supplierService.loadSupplierInvoicePayment(this.selectPayment);
    this.loadSupplierInvoice()
    if(navPage == 'new') this.loadSupplierPayment()
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
      this.dataSourcePayment = []
      this.selectPayment = ''
    }
    else{
      this.selectInvoice = id
      this.selectPayment = rowData.invoiceNo
      // this.currentSupplierInvoice = rowData
      this.dataSourceDetails = rowData.supplierInvoiceDetail
      this.selectName = rowData.supplierId
      // console.log(this.supplierDropDown)
      this.setInitiaPayment(rowData)
    }
  }

  setInitiaPayment(rowData: SupplierInvoice){
    this.currentSupplierPayment.paymentId = ''
    this.currentSupplierPayment.supplierId = rowData.supplierId
    this.currentSupplierPayment.supplierInvoiceNo = rowData.invoiceNo
    this.currentSupplierPayment.userId = rowData.userId
    this.currentSupplierPayment.invoiceNo = ''
    this.currentSupplierPayment.totalAmount = 0
    this.currentSupplierPayment.paymentAmount = 0
    this.currentSupplierPayment.remainBalance = 0
    this.currentSupplierPayment.date = new Date
  }

  getName(value: string){
    for (let i = 0; i < this.supplierDropDown.length; i++) {
      if( this.supplierDropDown[i].supplierId == value ) return this.supplierDropDown[i].supplierName
    }
    return 'No Data'
  }

  resetInvoice(){
    this.selectInvoice = ''
    this.selectPayment = ''
    this.currentSupplierInvoice = InitialSupplierInvoice.InitialSupplierInvoiceObj()
  }

  clickCurrentDetail(id: string, rowData: SupplierInvoiceDetail){
    let sum = 0; 
    this.dataSourceDetails.forEach(x => sum += x.purchaseQty * x.purchaseUnitPrice)

    if(this.selectInvoiceDetail == id){
      this.selectInvoiceDetail = ''
      this.currentSupplierPayment.paymentAmount = 0;
      this.currentSupplierPayment.remainBalance = 0;


    }else{
      this.selectInvoiceDetail = id
      this.currentSupplierPayment.paymentAmount = rowData.purchaseQty * rowData.purchaseUnitPrice
      this.currentSupplierPayment.remainBalance = -this.currentSupplierPayment.paymentAmount
      this.currentSupplierPayment.totalAmount = sum
    }
    console.log(id, 'page', this.selectInvoiceDetail)
  }

}