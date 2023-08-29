import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from '../shared/project.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  @Input()
  project: Project;
  @Output()
  save = new EventEmitter<any>();
  @Output()
  cancel = new EventEmitter<void>();
  projectForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.projectForm = new FormGroup({
      name: new FormControl(this.project.name, [Validators.required, Validators.minLength(3)]),
      description: new FormControl(this.project.description),
      budget: new FormControl(this.project.budget),
      isActive: new FormControl(this.project.isActive)
    });

  }

  onSubmit() {
    if (this.projectForm.invalid) {
      return;
    }

    const updatedProject = Object.assign(
                            {},
                            this.project,
                            this.projectForm.value);

    this.save.emit({project: updatedProject });
  }




onCancelClick(event: Event) {
    event.preventDefault();
    this.cancel.emit();
  }
}
