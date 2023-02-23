import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, name: 'John', type: 'Hourly', vacationDays: 0 },
    { id: 2, name: 'Mary', type: 'Salaried', vacationDays: 0 },
    { id: 3, name: 'Bob', type: 'Manager', vacationDays: 0 }
  ];

  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
  }

  work(employee: Employee, days: number): Observable<void> {
    if (days > 0 && days <= 260) {
      if (employee.type === 'Hourly') {
        employee.vacationDays += 10 * (days / 260);
      } else {
        employee.vacationDays += 15 * (days / 260);
      }
      return of(null);
    } else {
      return throwError('Invalid number of days worked');
    }
  }

  takeVacation(employee: Employee, days: number): Observable<void> {
    if (days > 0 && days <= employee.vacationDays) {
      employee.vacationDays -= days;
      return of(null);
    } else {
      return throwError('Invalid number of vacation days taken');
    }
  }
}
