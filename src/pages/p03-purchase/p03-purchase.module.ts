import { NgModule } from '@angular/core';
import { ButtonMenuComponent } from 'src/components/button-menu/button-menu.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { P03PurchaseComponent } from './p03-purchase.component';
import { Form03SupplierComponent } from 'src/form/p03-purchase/form-lv1Supplier/form03-supplier.component';
import { Form03SupplierinvoiceComponent } from 'src/form/p03-purchase/form-lv2Supplierinvoice/form03-supplierinvoice.component';
import { Form03PaymentComponent } from 'src/form/p03-purchase/form-lv3SupplierPayment/form03-payment.component';
import { Form03lv4Component } from 'src/form/p03-purchase/form-lv4/form03-lv4.component';
import { RouterModule, Routes } from '@angular/router';
import { SupplierService } from 'src/shared/services/S03Purchase/S03_Supplier';
import { SupplierBehaviorSubj } from 'src/shared/behaviorsubject/Supplier';
import { HttpClientModule } from '@angular/common/http';
import { SupplierInvoiceBehaviorSubj } from 'src/shared/behaviorsubject/SupplierInvoice';
import { SupplierInvoiceDetailBehaviorSubj } from 'src/shared/behaviorsubject/SupplierInvoiceDetail';

export const p03routes:Routes = [
  {
    path: '', 
    component: P03PurchaseComponent,
    children:[
      {path: 'supplier', component: Form03SupplierComponent},
      {path: 'purchaseinvoice', component: Form03SupplierinvoiceComponent},
      {path: 'purchasepayment', component: Form03PaymentComponent},
      {path: 'allpurchase', component: Form03lv4Component},
    ]
  }
]

@NgModule({
  declarations: [
    P03PurchaseComponent
  ],
  imports: [
    HttpClientModule,
    ButtonMenuComponent,
    Form03SupplierComponent,
    Form03SupplierinvoiceComponent,
    Form03PaymentComponent,
    Form03lv4Component,
    RouterModule.forChild(p03routes),

    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    SupplierService, SupplierBehaviorSubj, SupplierInvoiceBehaviorSubj, SupplierInvoiceDetailBehaviorSubj
  ],

})
export class P03PurchaseModule { }
