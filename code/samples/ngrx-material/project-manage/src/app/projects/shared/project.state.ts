import {
  ProjectActionTypes,
  ProjectActions,
  ProjectLoad,
  ProjectLoadSuccess,
  ProjectLoadFail,
  ProjectDelete,
  ProjectDeleteSuccess,
  ProjectDeleteFail,
  ProjectSave,
  ProjectSaveSuccess,
  ProjectSaveFail,
  ProjectEdit
} from "./project.actions";
import { Project } from "./project.model";

export interface ProjectState {
  data: Project[];
  processing: boolean;
  error: string;
  editingProject: Project;
  addingProject: Project;
}

const initialState: ProjectState = {
  data: [],
  processing: false,
  error: "",
  editingProject: undefined,
  addingProject: undefined
};

export function projectsReducer(
  state = initialState,
  action: ProjectActions
): ProjectState {
  switch (action.type) {
    case ProjectActionTypes.Load: {
      return {
        data: [],
        processing: true,
        error: "",
        editingProject: undefined,
        addingProject: undefined
      };
    }
    case ProjectActionTypes.LoadSuccess: {
      return {
        data: action.payload,
        processing: false,
        error: "",
        editingProject: undefined,
        addingProject: undefined
      };
    }
    case ProjectActionTypes.Adding: {
      return {
        data: state.data,
        processing: false,
        error: "",
        editingProject: state.editingProject,
        addingProject: action.payload as Project
      };
    }
    case ProjectActionTypes.AddingCancel: {
      return {
        data: state.data,
        processing: false,
        error: "",
        editingProject: state.editingProject,
        addingProject: undefined
      };
    }
    case ProjectActionTypes.Edit: {
      return {
        data: state.data,
        processing: false,
        error: "",
        editingProject: action.payload as Project,
        addingProject: undefined
      };
    }
    case ProjectActionTypes.EditCancel: {
      return {
        data: state.data,
        processing: false,
        error: "",
        editingProject: undefined,
        addingProject: undefined
      };
    }
    case ProjectActionTypes.Save: {
      return {
        data: state.data,
        processing: true,
        error: "",
        editingProject: state.editingProject,
        addingProject: state.addingProject
      };
    }
    case ProjectActionTypes.SaveSuccess: {
      let project: Project = action.payload;
      let projects: Project[];
      let isUpdate = state.data.some(p => p.id == project.id);

      if (isUpdate) {
        projects = state.data.map(project => {
          return project.id === action.payload.id
            ? Object.assign({}, project, action.payload)
            : project;
        });
      } else {
        //insert
        projects = [...state.data, project];
      }

      return {
        data: projects,
        processing: false,
        error: "",
        editingProject: undefined,
        addingProject: undefined
      };
    }
    case ProjectActionTypes.Delete: {
      return {
        data: state.data,
        processing: true,
        error: "",
        editingProject: undefined,
        addingProject: undefined
      };
    }
    case ProjectActionTypes.DeleteSuccess: {
      return {
        data: state.data.filter(project => project.id !== action.payload.id),
        processing: false,
        error: "",
        editingProject: undefined,
        addingProject: undefined
      };
    }
    case ProjectActionTypes.LoadFail:
    case ProjectActionTypes.SaveFail:
    case ProjectActionTypes.DeleteFail: {
      return {
        data: [],
        processing: false,
        error: action.payload,
        editingProject: undefined,
        addingProject: undefined
      };
    }
    default: {
      return state;
    }
  }
}

import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { ProjectService } from "./project.service";
import { switchMap, catchError, map, mergeMap } from "rxjs/operators";

@Injectable()
export class ProjectEffects {
  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(ProjectActionTypes.Load),
    switchMap(() => {
      return this.projectService.get().pipe(
        map(data => new ProjectLoadSuccess(data)),
        catchError(error => of(new ProjectLoadFail(error)))
      );
    })
  );

  @Effect()
  save$: Observable<Action> = this.actions$.pipe(
    ofType(ProjectActionTypes.Save),
    map((action: ProjectSave) => action.payload),
    mergeMap(project => {
      if (project.id) {
        return this.projectService.put(project).pipe(
          map(data => new ProjectSaveSuccess(project)),
          catchError(error => of(new ProjectSaveFail(error)))
        );
      } else {
        return this.projectService.post(project).pipe(
          map((data: Project) => new ProjectSaveSuccess(data)),
          catchError(error => of(new ProjectSaveFail(error)))
        );
      }
    })
  );

  @Effect()
  delete$: Observable<Action> = this.actions$.pipe(
    ofType(ProjectActionTypes.Delete),
    map((action: ProjectDelete) => action.payload),
    mergeMap(project => {
      return this.projectService.delete(project.id).pipe(
        map(data => new ProjectDeleteSuccess(project)),
        catchError(error => of(new ProjectDeleteFail(error)))
      );
    })
  );

  constructor(
    private actions$: Actions,
    private projectService: ProjectService
  ) {}
}
