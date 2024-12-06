import {Component, OnInit} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion'; 
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-draggable',
  standalone: true,
  imports: [ MatExpansionModule , NgFor],
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.css']
})
export class Draggable implements OnInit {
  panelOpenState = false;
  constructor() { }
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
  ngOnInit(): void {

  }

}
