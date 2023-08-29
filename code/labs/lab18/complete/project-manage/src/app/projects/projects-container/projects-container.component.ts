import { Component, OnInit } from '@angular/core';
import {PROJECTS} from '../shared/mock-projects';
import {Project} from '../shared/project.model';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css']
})
export class ProjectsContainerComponent implements OnInit {
  projects: Project[] = PROJECTS;
  constructor() { }

  ngOnInit() {
  }

  onSaveListItem(event: any) {
    const project: Project = event.item;
    const index = this.projects.findIndex(
      element => element.id === project.id
    );
    this.projects[index] = project;
  }



}
