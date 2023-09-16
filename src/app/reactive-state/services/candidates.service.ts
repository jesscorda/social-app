import type { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import type { Observable } from "rxjs";
import { environment } from "src/app/environments/environment";
import type { Candidate } from "../interfaces/candidate.interface";
import { CandidatesApi } from "./apiUrls/candidate-api-url";

@Injectable()

export class CandidatesService{
  constructor(private _httpClient: HttpClient) {}

  getCandidates(): Observable<Candidate[]> {
    return this._httpClient.get<Candidate[]>(
      `${environment.apiUrl}/${CandidatesApi.CandidatesBaseUrl}`
    );
  }

  getCandidate(id: number): Observable<Candidate> {
    return this._httpClient.get<Candidate>(
      `${environment.apiUrl}/${CandidatesApi.CandidatesBaseUrl}/${id}`
    );
  }
}
