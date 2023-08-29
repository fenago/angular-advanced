import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';

@NgModule({
  imports: [CommonModule, ProjectsRoutingModule],
  declarations: [ProjectsContainerComponent],
  exports: [ProjectsContainerComponent]
})
export class ProjectsModule {}
