import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule  } from '@angular/material/table';
import { MatSortModule  } from '@angular/material/sort';
import { SupplierService } from 'src/shared/services/S03Purchase/S03_Supplier';
import { SupplierBehaviorSubj } from 'src/shared/behaviorsubject/Supplier';
import { InitialSupplier, Supplier } from 'src/shared/interface/P03Purchases/Supplier/Supplier';
import { HttpClient } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-form03-supplier',
  templateUrl: './form03-supplier.component.html',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, ],
  styleUrls: ['./form03-supplier.component.css']
})

export class Form03SupplierComponent implements OnInit {
  title03 = "Supplier"
  displayedColumns: string[] = ["supplierId","supplierName","address","email","contactNo","description"];
  dataSource:Supplier[] = []
  currentSupplier: Supplier = InitialSupplier.InitialSupplierObj();
  
  constructor(
    private supplierService: SupplierService,
    private supplierBehaviorSubj :SupplierBehaviorSubj,
    private http: HttpClient
  ) { 
    this.loadSupplier()
  }

  ngOnInit(): void {
    //mockdata
    this.currentSupplier.supplierName = "BHospital"
    this.currentSupplier.address = "Bangkok"
    this.currentSupplier.email = "BHospital@gmail.com"
    this.currentSupplier.contactNo = "0584446523"
    this.currentSupplier.supplierId = ""
    this.currentSupplier.description = "VIP Supplier"
  }

  loadSupplier() {
    this.supplierService.loadSupplier();
    this.supplierBehaviorSubj.getSupplierList().subscribe(res=> this.dataSource = res);
  }

  register(){
    this.currentSupplier.supplierId = uuidv4()
    this.http.post('http://localhost:3000/supplier/create',this.currentSupplier).subscribe((res)=>{this.loadSupplier()})    
  }

  clear(){
    this.currentSupplier = InitialSupplier.InitialSupplierObj();
  }

  supplierNameChange( event : any){
    this.currentSupplier.supplierName = this.validateInput(event.target.value);
    console.log(this.currentSupplier)
  }
  
  emailChange( event : any){
    this.currentSupplier.email = this.validateInput(event.target.value);
    console.log(this.currentSupplier)
  }

  ContactChange( event : any){
    this.currentSupplier.contactNo = this.validateInput(event.target.value);
    console.log(this.currentSupplier)
  }

  AddressChange( event : any){
    this.currentSupplier.address = this.validateInput(event.target.value);
    console.log(this.currentSupplier)
  }

  descriptionChange( event : any){
    this.currentSupplier.description = this.validateInput(event.target.value);
    console.log(this.currentSupplier)
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
    this.currentSupplier.supplierId = id
    this.http.post('http://localhost:3000/supplier/delete',this.currentSupplier).subscribe(
      (res) =>{
        this.loadSupplier()
        this.clear()
      }
    )
  }

  updateData(id: string){
    console.log(id)
    this.currentSupplier.supplierId = id
    this.http.post('http://localhost:3000/supplier/update',this.currentSupplier).subscribe(
      (res) =>{
        this.loadSupplier()
        this.clear()
      }
    )
  }
  

}