import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Employee } from '../models/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeDataUrl = 'assets/data/employee-data.json';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('an error occured.');
    } else {
      console.error(`Backend returned ${error.status} the body was: `, error.error);
    }
    return throwError('Something bad happened. Please try again after sometime.');
  }


  getAllEmployees() {
    return this.http.get<Employee>(this.employeeDataUrl) // this line handles response
      .pipe(
        catchError(this.handleError) // this line handles error
      );
  }
}
