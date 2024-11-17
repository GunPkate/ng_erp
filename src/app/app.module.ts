import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonMenuComponent } from 'src/components/button-menu/button-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from 'src/components/navbar/navbar.module';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { RouterModule, Routes } from '@angular/router';
import { P01SalesComponent } from 'src/pages/p01-sales/p01-sales.component';
import { P00MainComponent } from 'src/pages/p00-main/p00-main.component';
import { P00MainModule } from 'src/pages/p00-main/p00-main.module';

const routes :Routes = [
  {path:'',component: P00MainComponent},
  {path:'sales',component: P01SalesComponent},
  {path:'sales/:assign',component: P01SalesComponent},
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
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
