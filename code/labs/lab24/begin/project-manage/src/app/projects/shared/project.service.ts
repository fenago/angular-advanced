import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {PROJECTS} from './mock-projects';
import {Project} from './project.model';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsUrl = environment.backendUrl + '/projects/';

  constructor(private http: HttpClient) { }

  list(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError('An error occured loading the projects.');
      })
    );
  }
}
