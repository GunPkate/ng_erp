import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu'; 

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  standalone: true,
  imports: [MatMenuModule,CommonModule],
  styleUrls: ['./button-menu.component.css']
})
export class ButtonMenuComponent implements OnInit {

  constructor() { }

  @Input() btnTitle?: string;
  @Input() btnMenuList?: any;
  @Output('BtnEvent') 
  btnEvent:EventEmitter<string> = new EventEmitter<string>;

  subBtn: any
  ngOnInit(): void {
    if(this.btnMenuList.subBtn){
      this.subBtn = this.btnMenuList.subBtn
    }
  }

  triggerBtn(value: string){
    this.btnEvent.emit(value);
    console.log(value)
  }
}
