import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { Project } from "./project.model";
import { ENDPOINT_URI } from "../../shared/constants";
import { Store, Action } from "@ngrx/store";

@Injectable()
export class ProjectService {
  private model = "projects";

  constructor(private http: HttpClient, private store: Store<any>) {}

  get url() {
    return `${ENDPOINT_URI}${this.model}`;
  }

  get(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url).pipe(
      catchError(err => {
        console.log(err);
        return throwError("An error occured retrieving projects.");
      })
    );
  }

  post(project: Project) {
    return this.http.post(this.url, project).pipe(
      catchError(err => {
        console.log(err);
        return throwError("An error occured adding a new project.");
      })
    );
  }

  put(project: Project) {
    return this.http.put(`${this.url}/${project.id}`, project).pipe(
      catchError(err => {
        console.log(err);
        return throwError("An error occured updating a project.");
      })
    );
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError(err => {
        console.log(err);
        return throwError(`An error occured deleting project with id ${id}. `);
      })
    );
  }
}
