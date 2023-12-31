import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { PostsService } from './services/posts.service';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { SharedModule } from '../shared/shared.module';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';

@NgModule({
  declarations: [
    PostsListComponent,
    PostListItemComponent
  ],
  imports: [CommonModule, SocialMediaRoutingModule, SharedModule],
  providers: [PostsService],
})
export class SocialMediaModule {}
