import {Component, Input, OnInit} from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop'; 
import { AccList } from 'src/shared/interface/P07Transaction/AccList';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-draggable',
  standalone: true,
  imports: [DragDropModule, NgFor],
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.css']
})


export class Draggable implements OnInit {
  @Input() accList?: AccList[]
  constructor() { }

  ngOnInit(): void {
    console.log(this.accList)
  }

}
