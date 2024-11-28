import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule  } from '@angular/material/table';
import { MatSortModule  } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form04-usertype',
  templateUrl: './form04-usertype.component.html',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, ],
  styleUrls: ['./form04-usertype.component.css']
})

export class Form04UserTypeComponent implements OnInit {
  

  title04 = 'User Type'
  displayedColumns: string[] = ['id', 'user_type'];
  dataSource :any = []
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/usertype/all').subscribe((res)=> {
      this.dataSource = res
      console.log(res)
    }
  )
    // console.log(process.env)
  }

}

interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}