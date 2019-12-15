import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app/module/app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from '../app/components/create-employee.component';
import { EmployeeDetailsComponent } from '../app/components/employee-details.component';
import { EmployeeListComponent } from '../app/components/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }