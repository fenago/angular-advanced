import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  @Output() cancel = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onCancelClick(event: Event) {
    event.preventDefault();
    this.cancel.emit();
  }
}
