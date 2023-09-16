import { Component } from '@angular/core';
import type { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss'],
})
export class CandidateComponent {
  candidate$ = this._route.data.pipe(map(data => data['candidate']));

  constructor(private _route: ActivatedRoute, private _router: Router) {}
  onHire():void{}

  onRefuse():void{}

  onGoBack():void{}

}
