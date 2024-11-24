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
  selector: 'app-form04-user',
  templateUrl: './form04-user.component.html',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, ],
  styleUrls: ['./form04-user.component.css']
})

export class Form04UserComponent implements OnInit {
  

  title04 = 'User'
  displayedColumns: string[] = ['user_id','first_name','last_name','contact_no','email','username'];
  dataSource :any = []
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/user/all').subscribe((res)=> {
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