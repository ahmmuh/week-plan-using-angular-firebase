import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { SharedProject } from '../models/shared';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 sharedProjectCollection : AngularFirestoreCollection<SharedProject>;
  sharedProject: Observable<SharedProject[]>;
  sharedProjectdoc: AngularFirestoreDocument<SharedProject>;

  constructor(private http: AngularFirestore) { 

    this.sharedProjectCollection = this.http.collection('shared');

    this.sharedProject = this.sharedProjectCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as SharedProject;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }


  onShare(project){
    this.sharedProjectCollection.add(project);
}

//   onShare(project: SharedProject){
//     this.sharedProjectdoc = this.http.doc(`shared/${project.id}`);
//     this.sharedProjectdoc.set(project);
// }


  getsharedProject(){
    return this.sharedProject;
  }
  
}
