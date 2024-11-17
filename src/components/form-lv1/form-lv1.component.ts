import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-form-lv1',
  templateUrl: './form-lv1.component.html',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule,MatSelectModule ],
  styleUrls: ['./form-lv1.component.css']
})
export class FormLv1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
