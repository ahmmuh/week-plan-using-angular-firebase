import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { Project } from "../../models/project";
import { ProjectService } from 'src/app/services/project.service';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';
import { SharedProject } from 'src/app/models/shared';
import { SharedService } from 'src/app/services/shared.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  item: SharedProject = {
    projectName: '',
    startDate: '',
    endDate: '',
    scope: '',
    firstName: ''
    
  }
 
projects: Project[];
employees: Employee[];
_Projects: SharedProject[];
//redigera project for att uppdatera ..
editState : boolean = false;
shareBtn: boolean = false;
projectEdit : Project;
shareProject: Project;
  constructor( 
    private projectService: ProjectService,
    private employeeService: EmployeesService,
    private sharedService: SharedService,
    private router: Router
    ){
    }

  ngOnInit() {
  this.getProjects();
  this.getEmployees();
  this.getSharedProjects();
  }
  getProjects(){
    this.projectService.getProjects()
    .subscribe(projects =>{
      //console.log(projects)
      this.projects = projects;
  
    })
  }

  getEmployees(){
    this.employeeService.getEmployees()
    .subscribe(employees =>{
      this.employees = employees;
    })
  }
getSharedProjects(){
  this.sharedService.getsharedProject()
  .subscribe(shared =>{
    this._Projects = shared;
  })
}

onShare(){
 
if(this.item.firstName != ''
&& this.item.projectName != ''
&& this.item.startDate != ''
&& this.item.endDate != ''
&& this.item.scope != ''){
  this.sharedService.onShare(this.item);

}
  
}


  editProject(event, project){
    this.editState = true;
    this.projectEdit = project;
  }

  share(project: SharedProject){
    this.sharedService.onShare(project);
  }
  deleteProject(event, project){
   confirm('Ar you sure?')
    this.clearState();
    this.projectService.deleteProject(project)
  }


  updateProject(project: Project){
    this.clearState();
  this.projectService.updateProject(project);
}


 clearState(){
  this.editState = false;
  this.projectEdit = null;
}
clearState2(){
  this.shareBtn = false;
  this.shareProject = null;
}

shareButton(event, project){
  this.shareBtn = true;
  this.shareProject = project;
}

}
