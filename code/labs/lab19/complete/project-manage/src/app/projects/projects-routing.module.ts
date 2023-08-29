import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
