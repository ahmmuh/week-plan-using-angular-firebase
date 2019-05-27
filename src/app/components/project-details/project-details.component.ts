import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Project } from 'src/app/models/project';
import { ProjectService } from "../../services/project.service";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  public projectId;
  public sub: any;
  project: Project;
  errorMessage: string;
  constructor(private route: ActivatedRoute,
    private projectService: ProjectService) {
      console.log(this.route.snapshot.paramMap.get('id'));
     }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.projectId = id;
    
    this.sub = this.route.params.subscribe(params => {
      this.projectId = params['id']; // (+) converts string 'id' to a number

      //In a real app: dispatch action to load the details here.
   });
  
  }

  // getProject(id: number){
  //   this.projectService.getProjects(id).subscribe(
  //     project => this.onRetrived(project),
  //     error => this.errorMessage = <any>error);

  // }
  // onRetrived(project: Project) : void{
  //   this.project = project;
  // }
  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }


}
