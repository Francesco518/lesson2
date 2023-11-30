import { Component, OnInit } from '@angular/core';
import { Post } from '../models/user';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.scss']
})
export class PostsDetailsComponent implements OnInit {
  post?: Post

  constructor(private route: ActivatedRoute, private postService: PostsService) { }

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('id'))
    this.post = this.postService.detailsPage(postId)
  }

}
