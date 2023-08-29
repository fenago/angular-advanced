import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../shared/project.model';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Input() projects: Project[];
  @Input() addingProject: Project;
  @Input() editingProject: Project;
  @Output() save = new EventEmitter<Project>();
  @Output() edit = new EventEmitter<Project>();
  @Output() adding = new EventEmitter<Project>();
  @Output() cancel = new EventEmitter<Project>();
  @Output() delete = new EventEmitter<Project>();

  constructor() { }

  ngOnInit() {
  }

  onAddClick() {
    this.adding.emit(new Project());
  }

  onEditClick(project: Project) {
    this.edit.emit(project);
  }

  onDeleteClick(project: Project) {
    this.delete.emit(project);
  }

  onSave(project: Project) {
    this.save.emit(project);
  }

  onCancel(event) {
    this.cancel.emit(event);
  }

}
