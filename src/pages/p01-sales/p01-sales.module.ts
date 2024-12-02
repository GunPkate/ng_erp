import { NgModule } from '@angular/core';
import { ButtonMenuComponent } from 'src/components/button-menu/button-menu.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Form03CustomerComponent } from 'src/form/p01-sales/form-lv1customer/form03-customer.component';
import { Form03Lv2Component } from 'src/form/p01-sales/form-lv2/form03-lv2.component';
import { Form03Lv3Component } from 'src/form/p01-sales/form-lv3/form03-lv3.component';
import { Form03lv4Component } from 'src/form/p01-sales/form-lv4/form03-lv4.component';
import { P01SalesComponent } from './p01-sales.component';
import { RouterModule, Routes } from '@angular/router';

export const p01routes: Routes = [
  { 
    path: '', 
    component:  P01SalesComponent,
    children: [
      {path: 'customers', component: Form03CustomerComponent},
      {path: 'saleinvoice', component: Form03Lv2Component,
        // children: [{path: ':assign', component: Form03Lv2Component}, ]
      },
      {path: 'salepayment', component: Form03Lv3Component}
    ]
  }
]

@NgModule({
  declarations: [
    P01SalesComponent
  ],
  imports: [
    ButtonMenuComponent,
    Form03CustomerComponent,
    Form03Lv2Component,
    Form03Lv3Component,
    Form03lv4Component,
    RouterModule.forChild(p01routes),
    
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],

})
export class P01SalesModule { }
