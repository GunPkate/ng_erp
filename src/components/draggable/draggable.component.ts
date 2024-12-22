import {Component, Input, OnInit} from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop'; 
import { AccList } from 'src/shared/interface/P07Transaction/AccList';
import { NgFor, NgIf } from '@angular/common';
import { AccountFilter } from 'src/shared/interface/P07Transaction/AccountFilter';


@Component({
  selector: 'app-draggable',
  standalone: true,
  imports: [DragDropModule, NgFor, NgIf],
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.css']
})


export class Draggable implements OnInit {
  @Input() accList?: AccList[]
  @Input() accFilter?: AccountFilter[]
  constructor() { }

  ngOnInit(): void {
    console.log(2134,this.accFilter)
  }

}
