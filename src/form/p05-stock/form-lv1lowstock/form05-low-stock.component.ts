import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { v4 as uuidv4 } from 'uuid';
import { NgFor } from '@angular/common';
import { Chart } from 'chart.js';
import { StockService } from 'src/shared/services/S05Stocks/S05_Category';
import { StockBehaviorSubj } from 'src/shared/behaviorsubject/Stock';
import { Stock } from 'src/shared/interface/P05Stock/Stock';

@Component({
  selector: 'app-form05-low-stock',
  templateUrl: './form05-low-stock.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, NgFor],
  styleUrls: ['./form05-low-stock.component.css']
})

export class Form05LowStockComponent implements OnInit {

  title05 = 'Product'
  chart: any
  constructor(
    private stockService: StockService,
    private stockBehaviorSubj: StockBehaviorSubj
  ){}

  data: Stock[] = []
  ngOnInit() {
    this.stockService.loadStock();
    this.stockBehaviorSubj.getStockList().subscribe(response=>
      {
        let sum = 0
        let qtyData: number[] = [0]
        response.forEach(temp => qtyData.push(sum += temp.quantity))
        let dateData = ['']
        response.forEach(x=>dateData.push(x.manuDate.toString()))

        if (this.chart) {
          this.chart.destroy();
          this.createChart(qtyData, dateData)
        } else {
          this.createChart(qtyData, dateData)
        }
        
      }  
    )
  }

  createChart(xData: number[],yData: String[]) {

    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: yData,
        datasets: [
          {
            label: "Sales",
            data: xData,
            backgroundColor: 'blue'
          },
          // {
          //   label: "Profit",
          //   data: ['542', '542', '536', '327', '17',
          //     '0.00', '538', '541'],
          //   backgroundColor: 'limegreen'
          // }
        ]
      },
      options: {
        aspectRatio: 2,
        scales: {
          y: {
              display: true,
              stacked: true,
              min: 0,
              max: xData[xData.length-1]+100
              
          }
          
      }
      }

    });
    this.chart.resize(1200,300)
  }
}