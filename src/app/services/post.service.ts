import { DataService } from './data.service';
import { AppError } from './../common/app-error';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostService extends DataService {

  constructor(http: HttpClient) {
    super("https://jsonplaceholder.typicode.com/posts",http)
  }

}