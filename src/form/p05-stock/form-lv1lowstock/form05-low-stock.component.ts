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

  ngOnInit() {
    this.createChart()
  }

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
        datasets: [
          {
            label: "Sales",
            data: ['467', '576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio: 2,
        scales: {
          y: {
              display: true,
              stacked: true,
              // min: -10,
              // max: 700
              
          }
      }
      }

    });
    this.chart.resize(1200,300)
  }
}