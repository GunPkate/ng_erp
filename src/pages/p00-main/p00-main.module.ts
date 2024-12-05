import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonMenuComponent } from 'src/components/button-menu/button-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CommonModule, NgFor } from '@angular/common';
import { P00MainComponent } from './p00-main.component';
import { MainPageGridComponent } from "../../components/main-page-grid/main-page-grid.component"; 
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Draggable } from 'src/components/draggable/draggable.component';

@NgModule({
  declarations: [
    P00MainComponent
  ],
  imports: [
    BrowserModule,
    ButtonMenuComponent,
    BrowserAnimationsModule,
    MainPageGridComponent,
    DragDropModule, 
    Draggable,
],
  providers: [],

})
export class P00MainModule { }
