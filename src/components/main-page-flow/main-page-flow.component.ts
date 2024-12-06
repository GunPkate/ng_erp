import { NgFor, NgIf, CommonModule } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion'; 
import { BusinessFlow } from 'src/shared/constant/BusinessFlow';


@Component({
  selector: 'app-main-page-flow',
  standalone: true,
  imports: [ NgFor, NgIf, CommonModule, MatExpansionModule ],
  templateUrl: './main-page-flow.component.html',
  styleUrls: ['./main-page-flow.component.css']
})
export class MainPageFlowComponent implements OnInit {

  businessFlowPurchases: any = BusinessFlow.filter(x=>x.type=='purchases')
  businessFlowSales: any = BusinessFlow.filter(x=>x.type=='sales')

  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
    console.log("businessFlowPurchases",this.businessFlowPurchases)
    console.log("businessFlowSales",this.businessFlowSales)
  }

}
