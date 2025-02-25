import { NgModule } from '@angular/core';
import { ButtonMenuComponent } from 'src/components/button-menu/button-menu.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { P04SettingComponent } from './p04-setting.component';
import { Form04UserComponent } from 'src/form/p04-setting/form-lv1AddUser/form04-user.component';
import { Form04UserTypeComponent } from 'src/form/p04-setting/form-lv2UserType/form04-usertype.component';
import { Form04AccountHead } from 'src/form/p04-setting/form-lv3AccountHead/form04AccountHead.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/shared/services/S04setting/S04_1User';
import { UserBehaviorSubj } from 'src/shared/behaviorsubject/User';
import { UserTypeBehaviorSubj } from 'src/shared/behaviorsubject/UserType';
import { AccountHeadBehaviorSubj } from 'src/shared/behaviorsubject/AccountHead';
import { AccountService } from 'src/shared/services/S04setting/S04_2Account';
import { Form04AccountControl } from 'src/form/p04-setting/form-lv4AccountControl/form04AccountControl.component';
import { Form04AccountSubcontrol } from 'src/form/p04-setting/form-lv5AccountSubcontrol/form04AccountSubcontrol.component';
import { AccountControlBehaviorSubj } from 'src/shared/behaviorsubject/AccountConrtol';
import { AccountSubcontrolBehaviorSubj } from 'src/shared/behaviorsubject/AccountSubconrtol';
import { FinancialYearService } from 'src/shared/services/S04setting/S04_1FinancialYear';
import { FinancialYearBehaviorSubj } from 'src/shared/behaviorsubject/FinancialYear';
import { Form04FinancialYearComponent } from 'src/form/p04-setting/form-lv1FinancialYear/form04-financialYear.component';

const routes:Routes = [
  { path: "adduser", component: Form04UserComponent },
  { path: "usertype", component: Form04UserTypeComponent },
  { path: "accounthead", component: Form04AccountHead },
  { path: "accountcontrol", component: Form04AccountControl },
  { path: "accountsubcontrol", component: Form04AccountSubcontrol },
  { path: "fiscalyear", component: Form04FinancialYearComponent },
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
  providers: [
    UserService, 
    UserBehaviorSubj, UserTypeBehaviorSubj, 
    AccountService,
    AccountHeadBehaviorSubj, AccountControlBehaviorSubj,
    AccountSubcontrolBehaviorSubj, 
    FinancialYearService, FinancialYearBehaviorSubj
   ],

})
export class P04SettingModule { }
