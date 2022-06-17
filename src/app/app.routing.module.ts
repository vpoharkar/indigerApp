import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddNewEmployeeComponent } from './components/add-new-employee/add-new-employee.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add-new-employee', component: AddNewEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }