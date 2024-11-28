import { NgModule } from '@angular/core';
import { ButtonMenuComponent } from 'src/components/button-menu/button-menu.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { P04SettingComponent } from './p04-setting.component';
import { Form04UserComponent } from 'src/form/p04-setting/form-lv1AddUser/form04-user.component';
import { Form04UserTypeComponent } from 'src/form/p04-setting/form-lv2UserType/form04-usertype.component';
import { Form04AccountHead } from 'src/form/p04-setting/form-lv3AccountHead/form04AccountHead.component';
import { Form04AccountControl } from 'src/form/p04-setting/form-lv4AccountControl/form04AccountControl.component';
import { Form03lv4Component } from 'src/form/p04-setting/form-lv4/form03-lv4.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/shared/services/S04setting/S04_1User';
import { UserBehaviorSubj } from 'src/shared/behaviorsubject/User';
import { UserTypeBehaviorSubj } from 'src/shared/behaviorsubject/UserType';

const routes:Routes = [
  { path: "adduser", component: Form04UserComponent },
  { path: "usertype", component: Form04UserTypeComponent },
  { path: "accounthead", component: Form04AccountHead },
  { path: "accountcontrol", component: Form04AccountHead },
  { path: "accountsubcontrol", component: Form04AccountHead },
  { path: "fiscalyear", component: Form04AccountHead },
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
  providers: [UserService, UserBehaviorSubj, UserTypeBehaviorSubj ],

})
export class P04SettingModule { }
