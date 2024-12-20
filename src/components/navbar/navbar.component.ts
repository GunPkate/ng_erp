import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllBtn } from '../../shared/constant/AllBtn'
import { Btn } from 'src/shared/interface/Btn';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  topic = ''
  allBtn: Btn[] = AllBtn
  constructor(private router: Router){}

  triggerBtnEvent(value: string){
    // this.topic = value
    console.log(value)
    let check = value.split('/')
    let param0 = check[0].toLowerCase().replace(" ","")
    let param1 = check[1].toLowerCase().replace(" ","")
    if(param1 && param1 != ''){
      this.router.navigate([`/${param0}`, param1])
    }else{
      this.router.navigate([`/${param0}`])
    }
  }
}
