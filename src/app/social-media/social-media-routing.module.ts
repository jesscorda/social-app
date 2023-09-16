import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PostResolver, PostsResolver } from './services/resolvers/posts.resolver';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';

const routes: Routes = [
  {
    path: '',
    component: PostsListComponent,
    resolve: { posts: PostsResolver },
  },
  {
    path: ':postId',
    component: PostListItemComponent,
    resolve: { post: PostResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialMediaRoutingModule {}
