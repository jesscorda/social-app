import { Component } from '@angular/core';
import type { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import type { Post} from 'src/app/core/models/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
})
export class PostListItemComponent {
  post$ = this._route.data.pipe(map((data) => data['post'] as Post));

  constructor(private _route: ActivatedRoute) {}

}
