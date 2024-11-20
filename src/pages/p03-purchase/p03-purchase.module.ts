import { NgModule } from '@angular/core';
import { ButtonMenuComponent } from 'src/components/button-menu/button-menu.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { P03PurchaseComponent } from './p03-purchase.component';
import { Form03Lv1Component } from 'src/form/p03-purchase/form-lv1/form03-lv1.component';
import { Form03Lv2Component } from 'src/form/p03-purchase/form-lv2/form03-lv2.component';
import { Form03Lv3Component } from 'src/form/p03-purchase/form-lv3/form03-lv3.component';
import { Form03lv4Component } from 'src/form/p03-purchase/form-lv4/form03-lv4.component';
import { RouterModule, Routes } from '@angular/router';

export const p03routes:Routes = [
  {
    path: '', 
    component: P03PurchaseComponent,
    children:[
      {path: 'supplier', component: Form03Lv1Component},
      {path: 'purchaseinvoice', component: Form03Lv2Component},
      {path: 'purchasepayment', component: Form03Lv3Component},
      {path: 'allpurchase', component: Form03lv4Component},
    ]
  }
]

@NgModule({
  declarations: [
    P03PurchaseComponent
  ],
  imports: [
    ButtonMenuComponent,
    Form03Lv1Component,
    Form03Lv2Component,
    Form03Lv3Component,
    Form03lv4Component,
    RouterModule.forChild(p03routes),

    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],

})
export class P03PurchaseModule { }
