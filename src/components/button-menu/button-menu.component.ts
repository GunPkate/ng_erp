import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu'; 
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  standalone: true,
  imports: [MatMenuModule,CommonModule],
})
export class ButtonMenuComponent implements OnInit {

  constructor(private domSanitizer: DomSanitizer) { }

  @Input() btnTitle?: string;
  @Input() btnMenuList?: any;
  @Output('BtnEvent') 
  btnEvent:EventEmitter<string> = new EventEmitter<string>;

  subBtn: any = []
  ngOnInit(): void {
  
  }

  triggerBtn(value: string){
    this.btnEvent.emit(this.btnTitle+"/"+value);
  }

  getSubBtn(number: number){
    this.subBtn = []
    this.btnMenuList.forEach((e: any) => {
        if(number == e.subMenu){
          this.subBtn = (e.subBtn)
        }
      });
  }
}
