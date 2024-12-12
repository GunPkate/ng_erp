import { NgModule } from '@angular/core';
import { ButtonMenuComponent } from 'src/components/button-menu/button-menu.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Form01CustomerComponent } from 'src/form/p01-sales/form-lv1customer/form01-customer.component';
import { Form01CustomerinvoiceComponent } from 'src/form/p01-sales/form-lv2CustomerInvoice/form01-customerinvoice.component';
import { Form01PaymentComponent } from 'src/form/p01-sales/form-lv3CustomerPayment/form01-payment.component';
import { Form03lv4Component } from 'src/form/p01-sales/form-lv4/form03-lv4.component';
import { P01SalesComponent } from './p01-sales.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerService } from 'src/shared/services/S01Sales/S01_Customer';
import { CustomerBehaviorSubj } from 'src/shared/behaviorsubject/Customer';
import { P00MainComponent } from '../p00-main/p00-main.component';

export const p01routes: Routes = [
  { 
    path: '', 
    component:  P01SalesComponent,
    children: [
      {path: '', component: P00MainComponent},
      {path: 'customers', component: Form01CustomerComponent},
      {path: 'saleinvoice', component: Form01CustomerinvoiceComponent,
        // children: [{path: ':assign', component: Form03Lv2Component}, ]
      },
      {path: 'salepayment', component: Form01PaymentComponent}
    ]
  }
]

@NgModule({
  declarations: [
    P01SalesComponent
  ],
  imports: [
    ButtonMenuComponent,
    Form01CustomerComponent,
    Form01CustomerComponent,
    Form01CustomerinvoiceComponent,
    Form03lv4Component,
    RouterModule.forChild(p01routes),
    
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [CustomerService, CustomerBehaviorSubj ],

})
export class P01SalesModule { }
