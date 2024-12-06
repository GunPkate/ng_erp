import {Component, OnInit} from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop'; 
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-draggable',
  standalone: true,
  imports: [DragDropModule, CdkAccordionModule, NgFor],
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.css']
})
export class Draggable implements OnInit {

  constructor() { }
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
  ngOnInit(): void {

  }

}
