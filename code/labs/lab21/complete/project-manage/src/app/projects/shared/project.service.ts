import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {PROJECTS} from './mock-projects';
import {Project} from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  list(): Observable<Project[]> {
    return of(PROJECTS);
  }
}
