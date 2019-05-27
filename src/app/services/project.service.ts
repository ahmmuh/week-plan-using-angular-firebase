import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Project } from '../models/project';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
projectsCollection : AngularFirestoreCollection<Project>;
projects: Observable<Project[]>;
projectDoc: AngularFirestoreDocument<Project>;

employeeCollection : AngularFirestoreCollection<Employee>;
employees: Observable<Employee[]>;
employeesdoc: AngularFirestoreDocument<Employee>;


  constructor(public afs: AngularFirestore) {

    this.projectsCollection = this.afs.collection('projects');
    this.employeeCollection = this.afs.collection('employees');
    this.employeeCollection = this.afs.collection('shared');

    this.projects = this.projectsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Project;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
    
   

   getProjects(){
     return this.projects;
   }
 

    onSubmit(project){
    this.projectsCollection.add(project);
}

    updateProject(project: Project){
    this.projectDoc = this.afs.doc(`projects/${project.id}`);
    this.projectDoc.update(project);
}

deleteProject(project: Project){
  this.projectDoc = this.afs.doc(`projects/${project.id}`);
  this.projectDoc.delete();
}


}
