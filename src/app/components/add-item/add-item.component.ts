import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project";
import { ProjectService } from "../../services/project.service";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  project: Project = {
    projectName: '',
    startDate: '',
    endDate: '',
    scope: ''
  }
  
    



  constructor(private projectService: ProjectService) { }

  ngOnInit() {

  }

  // addProject(){
  //   //this.db.collection('posts').add({'projectName': this.projectName, 'startDate': this.startDate, 'endDate': this.endDate, 'scope': this.scope,});

  // }

  onSubmit(){
    if(this.project.projectName != '' && this.project.startDate != ''
    && this.project.endDate != '' && this.project.scope != ''){
      this.projectService.onSubmit(this.project);
  
    } 
  }
}
