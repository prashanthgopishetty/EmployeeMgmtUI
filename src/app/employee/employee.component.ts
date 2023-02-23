import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  work(employee: Employee, days: number): void {
    this.employeeService.work(employee, days)
      .subscribe(() => this.getEmployees());
  }

  takeVacation(employee: Employee, days: number): void {
    this.employeeService.takeVacation(employee, days)
      .subscribe(() => this.getEmployees());
  }
}
