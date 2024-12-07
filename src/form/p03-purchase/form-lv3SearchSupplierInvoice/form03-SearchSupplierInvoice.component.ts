import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule  } from '@angular/material/table';
import { MatSortModule  } from '@angular/material/sort';
import { SupplierInvoice } from 'src/shared/interface/P03Purchases/Purchase/SupplierInvoice';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form03-SearchSupplierInvoice',
  templateUrl: './form03-SearchSupplierInvoice.component.html',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, NgIf ],
  styleUrls: ['./form03-SearchSupplierInvoice.component.css']
})

export class Form03SearchSupplierInvoiceComponent implements OnInit {

  
  searchSupplierInvoice: SupplierInvoice[] = [];
  page:string = "list"

  displayedColumns: string[] = ['id', 'supplierId',  'invoiceNo', 'title', 'totalAmount', 'date', 'description', 'userId',];
 
  dataSource = this.searchSupplierInvoice;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  changePage(navPage: string) {
    this.page = navPage;
  }

}