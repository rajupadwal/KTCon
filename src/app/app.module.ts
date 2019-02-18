import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyProgressReportComponent } from './daily-progress-report/daily-progress-report.component';
import { FormsModule } from '@angular/forms';
import { BillCheckListComponent } from './bill-check-list/bill-check-list.component';
import { LoginComponent } from './login/login.component';
import { SupplierMasterComponent } from './supplier-master/supplier-master.component';


@NgModule({
  declarations: [
    AppComponent,
    DailyProgressReportComponent,
    BillCheckListComponent,
    LoginComponent,
    SupplierMasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
