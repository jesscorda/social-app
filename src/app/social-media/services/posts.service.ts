import type { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import type { Post } from 'src/app/core/models/post';
import { PostsApi } from './posts-api-urls';
import { environment } from 'src/app/environments/environment';

@Injectable()
export class PostsService {
  constructor(private _httpClient: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this._httpClient.get<Post[]>(
      `${environment.apiUrl}/${PostsApi.PostsBaseUrl}`
    );
  }

  getPost(id: number): Observable<Post> {
    return this._httpClient.get<Post>(
      `${environment.apiUrl}/${PostsApi.PostsBaseUrl}/${id}`
    );
  }
}
