import { inject } from '@angular/core';
import type {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import type { Observable } from 'rxjs';
import { CandidatesService } from '../services/candidates.service';
import type { Candidate } from '../interfaces/candidate.interface';

export const CandidatesResolver: ResolveFn<Candidate[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  candidatesService: CandidatesService = inject(CandidatesService)
): Observable<Candidate[]> => candidatesService.getCandidates();

export const CandidateResolver: ResolveFn<Candidate> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  candidatesService: CandidatesService = inject(CandidatesService)
): Observable<Candidate> => candidatesService.getCandidate(route.params['candidateId']);
