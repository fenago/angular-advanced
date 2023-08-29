import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectsComponent } from "./projects.component";
import { ProjectService } from "./shared/project.service";
import { ProjectListComponent } from "./project-list/project-list.component";
import { ProjectFormComponent } from "./project-form/project-form.component";

import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  declarations: [ProjectsComponent, ProjectListComponent, ProjectFormComponent],
  providers: [ProjectService],
  exports: [ProjectsComponent]
})
export class ProjectsModule {}
