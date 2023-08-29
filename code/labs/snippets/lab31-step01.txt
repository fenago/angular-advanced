import { Component, OnInit, OnDestroy } from '@angular/core';
import { PROJECTS } from '../shared/mock-projects';
import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';
import { Subject, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css']
})
export class ProjectsContainerComponent implements OnInit, OnDestroy {
  projects: Project[];
  errorMessage: string;
  loading: boolean;
  private searchTerms = new Subject<string>();
  private subscription: Subscription;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.observeSearchTerms();
    this.searchTerms.next('');
  }

  onSearch(term: string) {
    this.searchTerms.next(term);
  }

  observeSearchTerms() {
    this.subscription = this.searchTerms
      .pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),

        // ignore new term if same as previous term
        distinctUntilChanged(),

        // switch to new search observable each time the term changes
        switchMap(
          (term: string): Observable<Project[]> => {
            this.loading = true;
            return this.projectService.listByName(term);
          }
        )
      )
      .subscribe(
        data => {
          this.loading = false;
          this.projects = data;
        },
        error => {
          this.loading = false;
          this.errorMessage = error;
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSaveListItem(event: any) {
    const project: Project = event.item;
    this.projectService.put(project).subscribe(
      updatedProject => {
        const index = this.projects.findIndex(
          element => element.id === project.id
        );
        this.projects[index] = project;
      },
      error => (this.errorMessage = error)
    );
  }
}
