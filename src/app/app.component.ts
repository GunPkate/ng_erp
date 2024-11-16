import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(router :Router){}

  title = 'ng_erp';
  topic = ''
  inputBtn1 = [
    {
      btnTitleName: "Customers",
      subMenu: "1",
      subBtn:[]
    },
    {
      btnTitleName: "Sale Invoice",
      subMenu: "2",
      subBtn: [
        {btnTitleName: "Invoice"},
        {btnTitleName: "Receipt"},
        {btnTitleName: "Report"},
      ]
    },
    {
      btnTitleName: "Sale Payment",
      subMenu: "3",
      subBtn: []
    },
    
  ]

  triggerBtnEvent(value: any){
    this.topic = value
    console.log(value)
  }
}
