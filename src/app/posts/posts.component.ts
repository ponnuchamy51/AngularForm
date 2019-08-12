import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;

  constructor(private postService: PostService) {

  }

  ngOnInit() {

    this.postService.getAll().subscribe(
      (responce) => {
        this.posts = responce
      }, error => {
        throw error
      }
    );


  }

  deletePost(post) {

    return this.postService.delete(post.id).subscribe((response) => {
      let index = this.posts.indexOf(post)
      this.posts.splice(index, 1)
    }, (error: AppError) => {
      if (error instanceof NotFoundError) {
        alert("This post already deleted.")
      }
      else {
        throw error
      }

    })

  }

}
