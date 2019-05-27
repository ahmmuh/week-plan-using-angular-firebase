import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { NoteComponent } from './components/note/note.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'menu', component: MenuComponent},
  {path: '', component: DashboardComponent},
  {path: 'projectsD/:id', component: ProjectDetailsComponent},
  {path: 'add-item', component: AddItemComponent},
  {path: 'note', component: NoteComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
