import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employeesCollection : AngularFirestoreCollection<Employee>;
  employees: Observable<Employee[]>;
  employeesdoc: AngularFirestoreDocument<Employee>;


  constructor(private http: AngularFirestore) { 
 
    this.employeesCollection = this.http.collection('employees');

    this.employees = this.employeesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Employee;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }

  onAdd(employee){
    this.employeesCollection.add(employee);
  }

  getEmployees(){
    return this.employees;
  }


}
