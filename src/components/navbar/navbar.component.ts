import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title1 = 'Sales Department';
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
