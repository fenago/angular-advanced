import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Project } from '../shared/project.model';


@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  @Input() project: Project;
  @Output() save = new EventEmitter<Project>();
  @Output() cancel = new EventEmitter<Project>();
  projectForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.project = new Project();
    this.projectForm = this.formBuilder.group({
      name: [this.project.name],
      description: [this.project.description],
      budget: [this.project.budget],
      isActive: [this.project.isActive]
    });
  }

  onSubmit() {
    let updatedProject = Object.assign({}, this.project, this.projectForm.value);
    this.save.emit(updatedProject);
  }

  onCancelClick(event) {
    event.preventDefault();
    this.cancel.emit(this.project);
  }

}
