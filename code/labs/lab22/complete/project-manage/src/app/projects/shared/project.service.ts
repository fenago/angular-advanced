import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {PROJECTS} from './mock-projects';
import {Project} from './project.model';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsUrl = environment.backendUrl + '/projects/';

  constructor(private http: HttpClient) { }

  list(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }
}
