import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonMenuComponent } from 'src/components/button-menu/button-menu.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ButtonMenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
