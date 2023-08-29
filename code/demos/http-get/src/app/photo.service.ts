import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Photo[]> {
    return this.http.get<Photo[]>('http://localhost:3000/photos');
  }
}
