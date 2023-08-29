//test
import { Action } from '@ngrx/store';
import { Project } from './project.model';

export enum ProjectActionTypes {
  Load = '[Project] Load',
  LoadSuccess = '[Project] LoadSuccess',
  LoadFail = '[Project] LoadFail',
  Save = '[Project] Save',
  SaveSuccess = '[Project] SaveSuccess',
  SaveFail = '[Project] SaveFail',
  Delete = '[Project] Delete',
  DeleteSuccess = '[Project] DeleteSuccess',
  DeleteFail = '[Project] DeleteFail',
  Edit = '[Project] Edit',
  EditCancel = '[Project] EditCancel',
  Adding = '[Project] Adding',
  AddingCancel = '[Project] AddingCancel',
}

export class ProjectLoad implements Action {
  readonly type = ProjectActionTypes.Load;

  constructor() { }
}

export class ProjectLoadSuccess implements Action {
  readonly type = ProjectActionTypes.LoadSuccess;

  constructor(public payload: Project[]) { }
}

export class ProjectLoadFail implements Action {
  readonly type = ProjectActionTypes.LoadFail;

  constructor(public payload: any) { }
}

export class ProjectSave implements Action {
  readonly type = ProjectActionTypes.Save;

  constructor(public payload: Project) { }
}

export class ProjectSaveSuccess implements Action {
  readonly type = ProjectActionTypes.SaveSuccess;

  constructor(public payload: Project) { }
}

export class ProjectSaveFail implements Action {
  readonly type = ProjectActionTypes.SaveFail;

  constructor(public payload: any) { }
}

export class ProjectDelete implements Action {
  readonly type = ProjectActionTypes.Delete;

  constructor(public payload: Project) { }
}

export class ProjectDeleteSuccess implements Action {
  readonly type = ProjectActionTypes.DeleteSuccess;

  constructor(public payload: Project) { }
}

export class ProjectDeleteFail implements Action {
  readonly type = ProjectActionTypes.DeleteFail;

  constructor(public payload: any) { }
}

export class ProjectEdit implements Action {
  readonly type = ProjectActionTypes.Edit;

  constructor(public payload: Project) { }
}

export class ProjectEditCancel implements Action {
  readonly type = ProjectActionTypes.EditCancel;

  constructor(public payload: Project) { }
}

export class ProjectAdding implements Action {
  readonly type = ProjectActionTypes.Adding;

  constructor(public payload: Project) { }
}

export class ProjectAddingCancel implements Action {
  readonly type = ProjectActionTypes.AddingCancel;

  constructor() { }
}


export type ProjectActions
  = ProjectLoad
  | ProjectLoadSuccess
  | ProjectLoadFail
  | ProjectSave
  | ProjectSaveSuccess
  | ProjectSaveFail
  | ProjectDelete
  | ProjectDeleteSuccess
  | ProjectDeleteFail
  | ProjectEdit
  | ProjectEditCancel
  | ProjectAdding
  | ProjectAddingCancel;

