import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule  } from '@angular/material/table';
import { MatSortModule  } from '@angular/material/sort';
import { Customer, InitialCustomer } from 'src/shared/interface/P01Sales/Customer/Customer';
import { HttpClient } from '@angular/common/http';
import { CustomerBehaviorSubj } from 'src/shared/behaviorsubject/Customer';
import { CustomerService } from 'src/shared/services/S01Sales/S01_Customer';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-form01-customer',
  templateUrl: './form01-customer.component.html',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, ],
  styleUrls: ['./form01-customer.component.css']
})

export class Form01CustomerComponent implements OnInit {
  
  title03 = "Customer"
  displayedColumns: string[] = ["customerId","customerName","address","email","contactNo","description"];
  dataSource:Customer[] = []
  currentCustomer: Customer = InitialCustomer.InitialCustomerObj();
  
  constructor(
    private customerService: CustomerService,
    private customerBehaviorSubj :CustomerBehaviorSubj,
    private http: HttpClient
  ) { 
    this.loadCustomer()
  }

  ngOnInit(): void {
    //mockdata
    this.currentCustomer.customerName = "Phx Phamarcy"
    this.currentCustomer.address = "Bangkok"
    this.currentCustomer.email = "PhxPhamarcy@gmail.com"
    this.currentCustomer.contactNo = "0584446523"
    this.currentCustomer.customerId = ""
    this.currentCustomer.description = "VIP Customer"
  }

  loadCustomer() {
    this.customerService.loadCustomer();
    this.customerBehaviorSubj.getCustomerList().subscribe(res=> this.dataSource = res);
  }

  register(){
    this.currentCustomer.customerId = uuidv4()
    this.http.post('http://localhost:3000/customer/create',this.currentCustomer).subscribe((res)=>{this.loadCustomer()})    
  }

  clear(){
    this.currentCustomer = InitialCustomer.InitialCustomerObj();
  }

  customerNameChange( event : any){
    this.currentCustomer.customerName = this.validateInput(event.target.value);
    console.log(this.currentCustomer)
  }
  
  emailChange( event : any){
    this.currentCustomer.email = this.validateInput(event.target.value);
    console.log(this.currentCustomer)
  }

  ContactChange( event : any){
    this.currentCustomer.contactNo = this.validateInput(event.target.value);
    console.log(this.currentCustomer)
  }

  AddressChange( event : any){
    this.currentCustomer.address = this.validateInput(event.target.value);
    console.log(this.currentCustomer)
  }

  descriptionChange( event : any){
    this.currentCustomer.description = this.validateInput(event.target.value);
    console.log(this.currentCustomer)
  }

  validateInput(data: any){
    if(data){
      return data
    }else{
      return ""
    }
  }



  deleteData(id: string){
    console.log(id)
    this.currentCustomer.customerId = id
    this.http.post('http://localhost:3000/customer/delete',this.currentCustomer).subscribe(
      (res) =>{
        this.loadCustomer()
        this.clear()
      }
    )
  }

  updateData(id: string){
    console.log(id)
    this.currentCustomer.customerId = id
    this.http.post('http://localhost:3000/customer/update',this.currentCustomer).subscribe(
      (res) =>{
        this.loadCustomer()
        this.clear()
      }
    )
  }
  

}