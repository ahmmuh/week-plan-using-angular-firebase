import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

 noteCollection : AngularFirestoreCollection<Note>;
 noteProject: Observable<Note[]>;
 notedoc: AngularFirestoreDocument<Note>;

  constructor(private http: AngularFirestore) {
    this.noteCollection = this.http.collection('notes');

    this.noteProject = this.noteCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Note;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

   addNote(project){
     this.noteCollection.add(project);

   }

   getNotes(){
     return this.noteProject;
   }
}
