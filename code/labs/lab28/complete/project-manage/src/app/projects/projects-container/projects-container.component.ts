import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../shared/mock-projects';
import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css']
})
export class ProjectsContainerComponent implements OnInit {
  projects: Project[];
  errorMessage: string;
  loading: boolean;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.loading = true;
    this.projectService.list().subscribe(
      data => {
        this.projects = data;
      },
      error => {
        this.loading = false;
        this.errorMessage = error;
      },
      () => (this.loading = false)
    );
  }

  onSaveListItem(event: any) {
    const project: Project = event.item;
    this.projectService.put(project).subscribe(
      updatedProject => {
        const index = this.projects.findIndex(
          element => element.id === project.id
        );
        this.projects[index] = project;
      },
      error => (this.errorMessage = error)
    );
  }
}
