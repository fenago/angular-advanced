import { projectsReducer } from '../projects/shared/project.state';
import { combineReducers } from '@ngrx/store';

export const reducers = {
  // errors: () => {},
  projects: projectsReducer
};

