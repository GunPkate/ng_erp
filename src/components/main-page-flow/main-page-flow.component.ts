import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BusinessFlow } from 'src/shared/constant/BusinessFlow';



@Component({
  selector: 'app-main-page-flow',
  standalone: true,
  imports: [ NgFor, NgIf],
  templateUrl: './main-page-flow.component.html',
  styleUrls: ['./main-page-flow.component.css']
})
export class MainPageFlowComponent implements OnInit {
  businessFlow: any = BusinessFlow
  constructor() { }

  ngOnInit(): void {

  }

}
