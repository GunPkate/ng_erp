import { Component, OnInit } from '@angular/core';
import { AllBtn } from 'src/constant/AllBtn';

@Component({
  selector: 'app-p00-main',
  templateUrl: './p00-main.component.html',
  styleUrls: ['./p00-main.component.css']
})
export class P00MainComponent implements OnInit {

  constructor() { }
  btnImport = AllBtn 
  ngOnInit(): void {

  }

}
