import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllBtn } from 'src/shared/constant/AllBtn';

@Component({
  selector: 'app-p00-main',
  templateUrl: './p00-main.component.html',
  styleUrls: ['./p00-main.component.css'],
})
export class P00MainComponent implements OnInit {

  home: boolean = false
  constructor(private router:Router) { }
  btnImport = AllBtn 
  ngOnInit(): void {
    console.log(this.btnImport.map(x=>x.inputBtn))
    if(this.router.routerState.snapshot.url === "/") this.home = true
  }
}
