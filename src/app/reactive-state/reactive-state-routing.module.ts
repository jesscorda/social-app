import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { CandidateResolver, CandidatesResolver } from './resolvers/candidates.resolver';

const routes: Routes = [
  {
    path: '',
    component: CandidateListComponent,
    resolve: {candidates: CandidatesResolver}
  },
  {
    path: ':candidateId',
    component: CandidateComponent,
    resolve: {candidate: CandidateResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveStateRoutingModule { }
