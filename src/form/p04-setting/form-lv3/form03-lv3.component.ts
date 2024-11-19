import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule  } from '@angular/material/table';
import { MatSortModule  } from '@angular/material/sort';
import { accountHead } from 'src/constant/AccountHead';

@Component({
  selector: 'app-form03-lv3',
  templateUrl: './form03-lv3.component.html',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, ],
  styleUrls: ['./form03-lv3.component.css']
})

export class Form03Lv3Component implements OnInit {
  
  ELEMENT_DATA: any[] = accountHead

  displayedColumns: string[] = ['id', 'accountHead', 'user'];
  dataSource = this.ELEMENT_DATA;
  constructor() { }
  
  ngOnInit(): void {  }

}

interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}