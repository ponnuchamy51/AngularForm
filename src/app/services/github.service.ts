import { DataService } from './data.service';
import { AppError } from '../common/app-error';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GithubService extends DataService {
  // this.url = url = "https://api.github.com/users/octocat/followers"
  constructor(http: HttpClient) {
    super("https://api.github.com/users/octocat/followers",http)
  }

  

}