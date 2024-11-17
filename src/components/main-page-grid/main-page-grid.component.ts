import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Btn } from 'src/interface/Btn';
import { InputBtn } from 'src/interface/InputBtn';


@Component({
  selector: 'app-main-page-grid',
  standalone: true,
  imports: [MatGridListModule, NgFor],
  templateUrl: './main-page-grid.component.html',
  styleUrls: ['./main-page-grid.component.css']
})
export class MainPageGridComponent implements OnInit {

  constructor() { }
  @Input() btnImport!: Btn[]
  subBtnGrid: InputBtn[] | undefined
  ngOnInit(): void {
    // subBtnGrid = this.btnImport.forEach(element => {
      this.btnImport.forEach( x=> 
        this.subBtnGrid = x.inputBtn
      )
      console.log("this.subBtnGrid",this.subBtnGrid)
    // });
  }

}
