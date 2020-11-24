import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {Project, Collection, Entity } from '../models/project'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiURL = "http://bogadoprueba.test/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }
   
  getAll(): Observable<Collection> {
    return this.httpClient.get<Collection>(this.apiURL + '/projects/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  create(project:Project): Observable<Project> {
    return this.httpClient.post<Project>(this.apiURL + '/projects/', JSON.stringify(project), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  find(id:number): Observable<Entity> {
    return this.httpClient.get<Entity>(this.apiURL + '/projects/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  update(id:number, project:Project): Observable<Project> {
    return this.httpClient.put<Project>(this.apiURL + '/projects/' + id, JSON.stringify(project), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  delete(id:number){
    return this.httpClient.delete<Project>(this.apiURL + '/projects/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
