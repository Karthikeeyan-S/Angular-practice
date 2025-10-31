import { Component } from '@angular/core';
import { PostService } from '../../postService';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post  {
  posts:Post[] = []

  constructor(private postService: PostService){

  }
  ngOnInit():void{
    this.postService.getPosts().subscribe((data)=>{
      
    })
  }
}
