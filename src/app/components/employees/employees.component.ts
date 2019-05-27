import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/app/models/employee';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employee: Employee = {
   firstName: ''
  }
  employees: Employee[];
  constructor(private employeeService: EmployeesService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {

    this.employeeService.getEmployees()
    .subscribe(
      employees =>{
        console.log(employees);
        this.employees = employees;
        
      }
    )
  }


  onAdd(){
    if(this.employee.firstName != ''){
      this.employeeService.onAdd(this.employee);
      this.toastr.success('Du har lagt till en ny medarbetare');

    }
  }
}
