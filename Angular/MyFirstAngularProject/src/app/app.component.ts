import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    { title: 'I want to learn Angular components!', text: 'I am still learning components!', id: 1},
    { title: 'Next Block', text: 'It will be about derectives!', id: 2}
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
    //console.log('Post', post);
  }
}
