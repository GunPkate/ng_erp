import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
  selector: 'app-main-page-grid',
  standalone: true,
  imports: [MatGridListModule, NgFor],
  templateUrl: './main-page-grid.component.html',
  styleUrls: ['./main-page-grid.component.css']
})
export class MainPageGridComponent implements OnInit {

  constructor() { }
  @Input() btnImport?: any

  ngOnInit(): void {
  }

}
