import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonMenuComponent } from 'src/components/button-menu/button-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from 'src/components/navbar/navbar.module';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { RouterModule, Routes } from '@angular/router';
import { P00MainComponent } from 'src/pages/p00-main/p00-main.component';
import { P01SalesComponent } from 'src/pages/p01-sales/p01-sales.component';
import { P02FileComponent } from 'src/pages/p02-file/p02-file.component';
import { P03PurchaseComponent } from 'src/pages/p03-purchase/p03-purchase.component';
import { P04SettingComponent } from 'src/pages/p04-setting/p04-setting.component';
import { P05StockComponent } from 'src/pages/p05-stock/p05-stock.component';
import { P06ReportsComponent } from 'src/pages/p06-reports/p06-reports.component';
import { P07TransactionsComponent } from 'src/pages/p07-transactions/p07-transactions.component';

import { P00MainModule } from 'src/pages/p00-main/p00-main.module';
import { P01SalesModule } from 'src/pages/p01-sales/p01-sales.module';
import { P03PurchaseModule } from 'src/pages/p03-purchase/p03-purchase.module';
import { P04SettingModule } from 'src/pages/p04-setting/p04-setting.module';
import { P05StockModule } from 'src/pages/p05-stock/p05-stock.module';

const routes :Routes = [
  {path:'',component: P00MainComponent},
  {
    path:'sales', 
    loadChildren: () => import('../pages/p01-sales/p01-sales.module').then(e=>e.P01SalesModule)
  },
  {path:'file', component: P00MainComponent}, 
  {
    path:'purchase', 
    loadChildren: () => import('../pages/p03-purchase/p03-purchase.module').then(e=>e.P03PurchaseModule)
  },   
  {
    path:'stock', 
    loadChildren: () => import('../pages/p05-stock/p05-stock.module').then(e=>e.P05StockModule)
  }, 
  {path:'setting', component: P00MainComponent}, 
  {path:'reports', component: P00MainComponent}, 
  {path:'transactions', component: P00MainComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    ButtonMenuComponent,
    P00MainModule,
    P01SalesModule,
    P03PurchaseModule,
    P04SettingModule,
    P05StockModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
