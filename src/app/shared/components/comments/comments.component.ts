import {
  animate,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import type {
  FormBuilder,
  FormControl} from '@angular/forms';
import {
  Validators,
} from '@angular/forms';
import type { Comment } from 'src/app/core/models/post';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  animations: [
    trigger('listItem', [
      transition('void <=> *', [
        style({
          transform: 'translateX(-100%)',
        }),
        animate(
          '500ms ease-out',
          style({
            transform: 'translateX(0)',
          })
        ),
      ]),
    ]),
  ],
})
export class CommentsComponent {
  @Input()
  comments!: Comment[];

  commentCtrl: FormControl;

  showCommentForm = false;

  constructor(private _formBuilder: FormBuilder) {
    this.commentCtrl = this._formBuilder.control('', [Validators.required]);
  }

  onSaveComment(): void {
    if (this.commentCtrl.invalid) {
      return;
    }
    const maxId = Math.max(...this.comments.map((comment) => comment.id));
    this.comments.push({
      comment: this.commentCtrl.value,
      createdDate: new Date().toISOString(),
      id: maxId + 1,
      userId: 555,
    });
    this.commentCtrl.reset();
    this.showCommentForm = false;
  }
}
