import {Component, OnInit} from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop'; 

@Component({
  selector: 'app-draggable',
  standalone: true,
  imports: [DragDropModule],
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.css']
})
export class Draggable implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
