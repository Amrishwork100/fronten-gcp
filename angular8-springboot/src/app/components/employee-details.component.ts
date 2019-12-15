import { Employee } from '../employee';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { EmployeeListComponent } from './employee-list.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
 
})
export class EmployeeDetailsComponent implements OnInit {

  @Input() employee: Employee;

  constructor(private employeeService: EmployeeService, private listComponent: EmployeeListComponent) { }

  ngOnInit() {
  }
}