import { Component } from '@angular/core';
import type { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import type { Post } from 'src/app/core/models/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent {
  posts$ = this._route.data.pipe(
    map((data) => {
      const colSpans = [2, 1, 2, 2, 1];
      const posts = data['posts'].map((post: Post, index: number) => {
        return { ...post, colSpan: colSpans[index], color: '#F3E5F5' };
      });
      return posts;
    })
  );

  constructor(private _route: ActivatedRoute, private _router:Router) {}

  navToPost(postId:number):void{
    this._router.navigate([postId], {relativeTo: this._route})
  }
}
