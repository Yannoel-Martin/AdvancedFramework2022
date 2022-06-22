import { Component, OnInit } from '@angular/core';
import { Post, DATA } from '../model/posts';

@Component({
  selector: 'app-example',
  templateUrl: './example-component.component.html'
})
export class ExampleComponent implements OnInit {
  username: string;
  totalPosts: number;
  allPosts: Post[];

  deletePost(index: number): void {
    this.allPosts.splice(index, 1);
    this.totalPosts = this.allPosts.length;
  }

  constructor () {
    this.username = "Dominique";
    this.allPosts = DATA;
    this.totalPosts = this.allPosts.length
  }

  ngOnInit(): void {
  }

}
