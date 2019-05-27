import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from "../environments/environment";
import { FormsModule,FormControl, FormGroup, ReactiveFormsModule }   from '@angular/forms';
import { FlashMessagesService, FlashMessagesModule } from 'angular2-flash-messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProjectService } from "./services/project.service";
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeesService } from './services/employees.service';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoteComponent } from './components/note/note.component';
import { BookingComponent } from './components/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ProjectsComponent,
    HomeComponent,
    MenuComponent,
    EmployeesComponent,
    ProjectDetailsComponent,
    DashboardComponent,
    NoteComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

    FlashMessagesModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),  // Add this
    AngularFirestoreModule
  ],
  providers: 
  [
    ProjectService,
    EmployeesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
