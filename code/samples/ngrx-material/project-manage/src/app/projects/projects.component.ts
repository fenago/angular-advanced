import { Component, OnInit } from "@angular/core";
import { ProjectService } from "./shared/project.service";
import { Observable } from "rxjs";
import { Project } from "./shared/project.model";
import { Store } from "@ngrx/store";
import { AppState } from "../shared/app.state";
import { ProjectState } from "./shared/project.state";
import {
  ProjectLoad,
  ProjectDelete,
  ProjectSave,
  ProjectEdit,
  ProjectEditCancel,
  ProjectAdding
} from "./shared/project.actions";

@Component({
  // selector: 'app-projects',
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit {
  processing$: Observable<boolean>;
  projects$: Observable<Project[]>;
  errorMessage$: Observable<string>;
  editingProject$: Observable<Project>;
  addingProject$: Observable<Project>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new ProjectLoad());
    this.processing$ = this.store.select<boolean>(
      state => state.projects.processing
    );
    this.projects$ = this.store.select<Project[]>(state => state.projects.data);
    this.errorMessage$ = this.store.select<string>(
      state => state.projects.error
    );
    this.editingProject$ = this.store.select<Project>(
      state => state.projects.editingProject
    );
    this.addingProject$ = this.store.select<Project>(
      state => state.projects.addingProject
    );
  }

  onEdit(project: Project) {
    this.store.dispatch(new ProjectEdit(project));
  }

  onAdding(project: Project) {
    this.store.dispatch(new ProjectAdding(project));
  }

  onCancel(project: Project) {
    this.store.dispatch(new ProjectEditCancel(project));
  }

  onDelete(project: Project) {
    this.store.dispatch(new ProjectDelete(project));
  }

  onSave(project: Project) {
    this.store.dispatch(new ProjectSave(project));
  }
}
