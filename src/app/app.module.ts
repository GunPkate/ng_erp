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
import { P05StockModule } from 'src/pages/p05-stock/p05-stock.module';

const routes :Routes = [
  {path:'',component: P00MainComponent},
  {path:'sales',component: P00MainComponent},
  {path:'file', component: P00MainComponent}, 
  {path:'purchase', component: P00MainComponent},   
  {path:'stock', component: P00MainComponent}, 
  {path:'setting', component: P00MainComponent}, 
  {path:'reports', component: P00MainComponent}, 
  {path:'transactions', component: P00MainComponent},

  {path:'sales/:assign',component: P01SalesComponent},
  {path:'file/:assign', component: P02FileComponent}, 
  {path:'purchase/:assign', component: P03PurchaseComponent},   
  {path:'stock/:assign', component: P05StockComponent}, 
  {path:'setting/:assign', component: P04SettingComponent}, 
  {path:'reports/:assign', component: P06ReportsComponent}, 
  {path:'transactions/:assign', component: P07TransactionsComponent},
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
    P05StockModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
