import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { Btn } from 'src/interface/Btn';
import { InputBtn } from 'src/interface/InputBtn';


@Component({
  selector: 'app-main-page-grid',
  standalone: true,
  imports: [MatGridListModule, NgFor, NgIf],
  templateUrl: './main-page-grid.component.html',
  styleUrls: ['./main-page-grid.component.css']
})
export class MainPageGridComponent implements OnInit {

  constructor(private route: Router) { }
  @Input() btnImport!: Btn[]
  subBtnGrid: InputBtn[] = []
  ngOnInit(): void {
    // subBtnGrid = this.btnImport.forEach(element => {
    let checkUrl = this.route.routerState.snapshot.url.replace("/","")  
    this.btnImport.forEach( x=> {
        if(checkUrl === x.title.toLowerCase()){
          this.subBtnGrid = x.inputBtn
        } 
      }
      )
      console.log("this.subBtnGrid",this.subBtnGrid)
      console.log("this route",)
    // });
  }

}
