import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop'; 
import { AccList } from 'src/shared/interface/P07Transaction/AccList';
import { NgFor, NgIf } from '@angular/common';
import { AccountFilter } from 'src/shared/interface/P07Transaction/AccountFilter';


@Component({
  selector: 'app-draggable-general-ledger',
  standalone: true,
  imports: [DragDropModule, NgFor, NgIf],
  templateUrl: './draggable-general-ledger.component.html',
  styleUrls: ['./draggable-general-ledger.component.css']
})


export class DraggableGeneralLedger implements OnInit {
  @Input() accList?: AccList[]
  @Input() accFilter?: AccountFilter[]
  @Output('accEvent') 
  accEvent:EventEmitter<string> = new EventEmitter<string>;
  
  constructor() { }

  ngOnInit(): void {

  }

  passAcc(value: string){
    this.accEvent.emit(value)
  }
}
