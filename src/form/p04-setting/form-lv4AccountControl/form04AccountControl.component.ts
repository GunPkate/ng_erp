import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule  } from '@angular/material/table';
import { MatSortModule  } from '@angular/material/sort';
import { accountHead } from 'src/shared/constant/AccountHead';

@Component({
  selector: 'app-form04AccountControl',
  templateUrl: './form04AccountControl.component.html',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, ],
  styleUrls: ['./form04AccountControl.component.css']
})

export class Form04AccountControl implements OnInit {
  
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