import { Injectable } from '@angular/core';
import { GithubRepoApiService } from '../service/github-repo-api.service';
import {
  Actions,
  createEffect,
  ofType
} from '@ngrx/effects';
import {
  fetchGithubRepoInfo,
  fetchGithubRepoInfoSuccess,
  searchGithubRepo,
  searchGithubRepoFail,
  searchGithubRepoSuccess
} from './github-repo.actions';
import {
  catchError,
  map,
  switchMap
} from 'rxjs/operators';
import { GithubRepoSearchApiResponse } from '../model/github-repo-search-api-response';
import { showErrorNotification } from '../../state/app.actions';
import { GithubRepo } from '../model/github-repo';

@Injectable()
export class GithubRepoEffects {
  searchGithubRepo$ = createEffect(() => this.actions$
    .pipe(
      ofType(searchGithubRepo),
      switchMap((action: {query: string}) => this.githubRepoApiService.searchRepo(action.query)),
      map((response: GithubRepoSearchApiResponse) => searchGithubRepoSuccess({repoList: response.items})),
      catchError((error: Error) => [
          showErrorNotification({message: 'Github repo search failed'}),
          searchGithubRepoFail()
        ]
      )
    )
  );

  fetchGithubRepoInfo$ = createEffect(() => this.actions$
    .pipe(
      ofType(fetchGithubRepoInfo),
      switchMap((action: {owner: string, name: string}) => this.githubRepoApiService.fetchRepoInfo(
        action.owner,
        action.name
      )),
      map((repo: GithubRepo) => fetchGithubRepoInfoSuccess({repo})),
      catchError((error: Error) => [showErrorNotification({message: 'Fetch github repo failed'})])
    )
  );

  constructor(
    private actions$: Actions,
    private githubRepoApiService: GithubRepoApiService
  ) {
  }
}
