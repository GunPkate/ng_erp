import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  topic = ''

  constructor(private router: Router){}
  allBtn = [
    {title: 'File',
      inputBtn: [
        {
          btnTitleName: "Print Invoice",
          subMenu: "1",
          subBtn:[]
        },
        {
          btnTitleName: "Sale Report",
          subMenu: "2",
          subBtn: [
            {btnTitleName: "Daily"},
            {btnTitleName: "Weekly"},
            {btnTitleName: "Monthly"},
          ]
        },
        {
          btnTitleName: "Purchase Report",
          subMenu: "3",
          subBtn: [
            {btnTitleName: "Daily"},
            {btnTitleName: "Weekly"},
            {btnTitleName: "Monthly"},
          ]
        },
        
      ]
    },{
      title: 'Purchase',
      inputBtn: [
        {
          btnTitleName: "Print Invoice",
          subMenu: "1",
          subBtn:[]
        },
        {
          btnTitleName: "Sale Report",
          subMenu: "2",
          subBtn: [
            {btnTitleName: "Daily"},
            {btnTitleName: "Weekly"},
            {btnTitleName: "Monthly"},
          ]
        },
        {
          btnTitleName: "Purchase Report",
          subMenu: "3",
          subBtn: [
            {btnTitleName: "Daily"},
            {btnTitleName: "Weekly"},
            {btnTitleName: "Monthly"},
          ]
        },
        
      ]
    },{
      title: 'Sales',
      inputBtn: [
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
    },{
      title: 'Stock',
      inputBtn: [
        {
          btnTitleName: "Print Invoice",
          subMenu: "1",
          subBtn:[]
        },
        {
          btnTitleName: "Sale Report",
          subMenu: "2",
          subBtn: [
            {btnTitleName: "Daily"},
            {btnTitleName: "Weekly"},
            {btnTitleName: "Monthly"},
          ]
        },
        {
          btnTitleName: "Purchase Report",
          subMenu: "3",
          subBtn: [
            {btnTitleName: "Daily"},
            {btnTitleName: "Weekly"},
            {btnTitleName: "Monthly"},
          ]
        },
        
      ]
    },{
      title: 'Setting',
      inputBtn: [
        {
          btnTitleName: "Print Invoice",
          subMenu: "1",
          subBtn:[]
        },
        {
          btnTitleName: "Sale Report",
          subMenu: "2",
          subBtn: [
            {btnTitleName: "Daily"},
            {btnTitleName: "Weekly"},
            {btnTitleName: "Monthly"},
          ]
        },
        {
          btnTitleName: "Purchase Report",
          subMenu: "3",
          subBtn: [
            {btnTitleName: "Daily"},
            {btnTitleName: "Weekly"},
            {btnTitleName: "Monthly"},
          ]
        },
        
      ]
    },{
      title: 'Reports',
      inputBtn: [
        {
          btnTitleName: "Print Invoice",
          subMenu: "1",
          subBtn:[]
        },
        {
          btnTitleName: "Sale Report",
          subMenu: "2",
          subBtn: [
            {btnTitleName: "Daily"},
            {btnTitleName: "Weekly"},
            {btnTitleName: "Monthly"},
          ]
        },
        {
          btnTitleName: "Purchase Report",
          subMenu: "3",
          subBtn: [
            {btnTitleName: "Daily"},
            {btnTitleName: "Weekly"},
            {btnTitleName: "Monthly"},
          ]
        },
        
      ]
    },{
      title : 'Transactions',
      inputBtn : [
        {
          btnTitleName: "Print Invoice",
          subMenu: "1",
          subBtn:[]
        },
        {
          btnTitleName: "Sale Report",
          subMenu: "2",
          subBtn: [
            {btnTitleName: "Daily"},
            {btnTitleName: "Weekly"},
            {btnTitleName: "Monthly"},
          ]
        },
        {
          btnTitleName: "Purchase Report",
          subMenu: "3",
          subBtn: [
            {btnTitleName: "Daily"},
            {btnTitleName: "Weekly"},
            {btnTitleName: "Monthly"},
          ]
        },
        
      ]
    }
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
