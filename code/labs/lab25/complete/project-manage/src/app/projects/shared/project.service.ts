import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {PROJECTS} from './mock-projects';
import {Project} from './project.model';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, delay} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsUrl = environment.backendUrl + '/projects/';

  constructor(private http: HttpClient) { }

  list(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl).pipe(
      // delay(2000),
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError('An error occurred loading the projects.');
      })
    );
  }

  put(project: Project): Observable<Project> {
    const url = this.projectsUrl + project.id;
    return this.http.put<Project>(url, project, httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError('An error occurred updating the projects.');
      })
    );
  }
}
