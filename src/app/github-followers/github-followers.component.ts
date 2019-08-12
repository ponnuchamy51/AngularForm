import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubService } from './../services/github.service';


@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  

  constructor(private service: GithubService) { }
  followers:any; 
  ngOnInit() {
    this.service.getAll().subscribe(response => 
      {
        console.log(response)
        this.followers = response
      })
  }

}
