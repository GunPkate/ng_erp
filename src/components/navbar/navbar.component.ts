import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title1 = 'Sales Department';
  topic = ''

  constructor(private router: Router){}
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

  triggerBtnEvent(value: string){
    // this.topic = value
    console.log(value)
    let check = value.split('/')
    let param = check[1].toLowerCase().replace(" ","")
    if(check[0] == 'sales'){
      this.router.navigate([`/sales`, param])
    }
  }
}
