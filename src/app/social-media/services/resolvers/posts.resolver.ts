import { inject } from '@angular/core';
import type {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import type { Observable } from 'rxjs';
import type { Post } from 'src/app/core/models/post';
import { PostsService } from '../posts.service';

export const PostsResolver: ResolveFn<Post[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  postsService: PostsService = inject(PostsService)
): Observable<Post[]> => postsService.getPosts();

export const PostResolver: ResolveFn<Post> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  postsService: PostsService = inject(PostsService)
): Observable<Post> => postsService.getPost(route.params['postId']);
