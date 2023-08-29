import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../shared/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input()
  project: Project;

  constructor() { }

  ngOnInit() {
  }

}
