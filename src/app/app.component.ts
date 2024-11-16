import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng_erp';
  topic = ''
  inputBtn1 = [
    {
      btnTitleName: "Sale",
      subMenu: "btn1",
      subBtn: [
        {btnTitleName: "Invoice"},
        {btnTitleName: "Receipt"},
        {btnTitleName: "Report"},
      ]
    },
    
  ]

  triggerBtnEvent(value: any){
    this.topic = value
    console.log(value)
  }
}
