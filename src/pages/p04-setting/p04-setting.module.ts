import { NgModule } from '@angular/core';
import { ButtonMenuComponent } from 'src/components/button-menu/button-menu.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { P04SettingComponent } from './p04-setting.component';
import { Form04UserComponent } from 'src/form/p04-setting/addUser/form04-user.component';
import { Form04UserTypeComponent } from 'src/form/p04-setting/userType/form04-usertype.component';
import { Form03Lv2Component } from 'src/form/p04-setting/form-lv2/form03-lv2.component';
import { Form03Lv3Component } from 'src/form/p04-setting/form-lv3/form03-lv3.component';
import { Form03lv4Component } from 'src/form/p04-setting/form-lv4/form03-lv4.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes = [
  { path: "adduser", component: Form04UserComponent },
  { path: "usertype", component: Form04UserTypeComponent },
  { path: "accounthead", component: Form03Lv2Component },
  { path: "accountcontrol", component: Form03Lv2Component },
  { path: "accountsubcontrol", component: Form03Lv2Component },
  { path: "fiscalyear", component: Form03Lv2Component },
]

@NgModule({
  declarations: [
    P04SettingComponent
  ],
  imports: [
    ButtonMenuComponent,
    RouterModule.forChild(routes),
    HttpClientModule,
    
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],

})
export class P04SettingModule { }
