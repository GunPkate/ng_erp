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
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-form05-low-stock',
  templateUrl: './form05-low-stock.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatTableModule, NgFor],
  styleUrls: ['./form05-low-stock.component.css']
})

export class Form05LowStockComponent implements OnInit {

  title05 = 'Product'

  data = [
    {
      id: 'chartOne',
      title: 'Chart One',
      type: 'bar',
      lables: ['Villas By Taru', 'Watch Tower'],
      data: [18, 12],
    },
    {
      id: 'chartTwo',
      title: 'Chart Two',
      type: 'bar',
      lables: ['Tea Avenue', 'The Grill Bar'],
      data: [18, 12, 2, 7],
    },
  ];

  ngOnInit(){}
  ngAfterViewInit() {
    this.data.forEach((element) => {
      this.generateType(element);
    });
  }

  generateType(data: any) {
    const myChart = new Chart(data.id, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: '# of Votes',
            data: data.data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}