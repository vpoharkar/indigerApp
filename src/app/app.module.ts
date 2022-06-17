import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddNewEmployeeComponent } from './components/add-new-employee/add-new-employee.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app.routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddNewEmployeeComponent,
    TopNavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
