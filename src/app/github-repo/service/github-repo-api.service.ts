import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubRepoSearchApiResponse } from '../model/github-repo-search-api-response';
import { GithubRepo } from '../model/github-repo';

@Injectable()
export class GithubRepoApiService {
  constructor(private http: HttpClient) {
  }

  searchRepo(query: string): Observable<GithubRepoSearchApiResponse> {
    return this.http.get<GithubRepoSearchApiResponse>('/search/repositories', {
      params: {
        q: query
      }
    });
  }

  fetchRepoInfo(owner: string, name: string): Observable<GithubRepo> {
    return this.http.get<GithubRepo>(`/repos/${owner}/${name}`);
  }
}
