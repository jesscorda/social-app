import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { CommentsComponent } from './components/comments/comments.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShortenPipe } from './pipes/shorten.pipe';
import { EnlargeDirective } from './directives/enlarge.directive';

const components = [CommentsComponent, ShortenPipe, EnlargeDirective];

const modules = [MaterialModule, ReactiveFormsModule, FormsModule]

@NgModule({
  declarations: [...components],
  imports: [CommonModule, ...modules],
  exports: [
    ...components,
    ...modules
  ],
})
export class SharedModule {}
