import { NgFor, NgIf, CommonModule } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion'; 
import { BusinessFlow } from 'src/shared/constant/BusinessFlow';


@Component({
  selector: 'app-draggable',
  standalone: true,
  imports: [ NgFor, NgIf, CommonModule ],
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.css']
})
export class Draggable implements OnInit {
  businessFlow: any = BusinessFlow

  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.businessFlow)
  }

}
