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
import { Supplier } from 'src/shared/interface/P03Purchases/Supplier/Supplier';

@Component({
  selector: 'app-form03-supplier',
  templateUrl: './form03-supplier.component.html',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, ],
  styleUrls: ['./form03-supplier.component.css']
})

export class Form03SupplierComponent implements OnInit {
  
  displayedColumns: string[] = ["supplierId","supplierName","address","email","contactNo","description"];
  dataSource:Supplier[] = []
  constructor(
    supplierService: SupplierService,
    supplierBehaviorSubj :SupplierBehaviorSubj
  ) { 
    supplierService.loadSupplier();
    supplierBehaviorSubj.getSupplierList().subscribe(res=> this.dataSource = res);
  }

  ngOnInit(): void {
    
  }

}