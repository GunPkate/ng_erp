import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonMenuComponent } from 'src/components/button-menu/button-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { P04SettingComponent } from './p04-setting.component';
import { Form03Lv1Component } from 'src/form/p04-setting/form-lv1/form03-lv1.component';
import { Form03Lv2Component } from 'src/form/p04-setting/form-lv2/form03-lv2.component';
import { Form03Lv3Component } from 'src/form/p04-setting/form-lv3/form03-lv3.component';
import { Form03lv4Component } from 'src/form/p04-setting/form-lv4/form03-lv4.component';


@NgModule({
  declarations: [
    P04SettingComponent
  ],
  imports: [
    BrowserModule,
    ButtonMenuComponent,
    BrowserAnimationsModule,
    Form03Lv1Component,
    Form03Lv2Component,
    Form03Lv3Component,
    Form03lv4Component,
    
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],

})
export class P04SettingModule { }
