import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsContainerComponent} from './projects-container/projects-container.component';
import {ProjectDetailContainerComponent} from './project-detail-container/project-detail-container.component';

const routes: Routes = [
  {path: 'projects', component: ProjectsContainerComponent},
  {path: '', pathMatch: 'full', redirectTo: 'projects'},
  {path: 'projects/:id', component: ProjectDetailContainerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
