import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from '../shared/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Input()
  projects: Project[] = [];
  @Output()
  saveListItem = new EventEmitter<any>();

  editingProject: Project;

  constructor() { }

  ngOnInit() {
  }

  onEdit(event: any) {
    this.editingProject = event.editingProject;
    console.log(this.editingProject);
  }

  onSave(event: any) {
    this.editingProject = null;
    this.saveListItem.emit({item: event.project});
  }

  onCancel() {
    this.editingProject = null;
  }
}
