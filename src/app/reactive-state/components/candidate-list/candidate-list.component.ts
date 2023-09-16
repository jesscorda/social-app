import { Component } from '@angular/core';
import type { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent {
  candidates$ = this._route.data.pipe(map(data => data['candidates']));

  constructor(private _route: ActivatedRoute, private _router: Router) {}
}
