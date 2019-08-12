import { HttpClient } from '@angular/common/http';
import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private routes: ActivatedRoute,private http: HttpClient) { }
  profileId ;
  profileInfo: any ;
  ngOnInit() {
    this.routes.paramMap.subscribe((params: any )  => {
      this.profileId = params.get('id')
      let url = "https://api.github.com/user/"+this.profileId 
       this.http.get(url).subscribe(response => {
        this.profileInfo = response
      })
    })
  }

}
