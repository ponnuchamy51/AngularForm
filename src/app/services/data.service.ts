import { AppError } from './../common/app-error';

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NotFoundError } from '../common/not-found-error';

@Injectable()

export class DataService {


  constructor(public url: string, public http) {

  }

  getAll() {
    return this.http.get(this.url).pipe(catchError(this.handleErrorObservable))
  }

  create(resource) {
    return this.http.post(this.url, resource).pipe(catchError(this.handleErrorObservable))
  }

  update(resource) {
    return this.http.patch(this.url, resource).pipe(catchError(this.handleErrorObservable))
  }

  delete(id) {
    // this.url = "https://jsonplssaceholder.typicode.com/posts"
    // id = 2133
    return this.http.get(this.url + '/' + id).pipe(catchError(this.handleErrorObservable))
  }

  private handleErrorObservable(error: Response | any) {
    if (error.status == 404)
      return throwError(new NotFoundError());
    else 
      return throwError(new AppError(error));
  }
}