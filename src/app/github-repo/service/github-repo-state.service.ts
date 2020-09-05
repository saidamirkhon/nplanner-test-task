import { Injectable } from '@angular/core';
import { AppState } from '../../model/app-state';
import {
  select,
  Store
} from '@ngrx/store';
import {
  fetchGithubRepoInfo,
  filterGithubRepoList,
  resetGithubRepoList,
  resetGithubRepoListFilter,
  searchGithubRepo
} from '../state/github-repo.actions';
import { GithubRepoListFilterPatch } from '../model/github-repo-list-filter-patch';
import { Observable } from 'rxjs';
import { GithubRepoLite } from '../model/github-repo-lite';
import {
  selectActiveGithubRepo,
  selectGithubRepoListFiltered,
  selectGithubRepoListIsLoading,
  selectNumMaxOpenIssuesFilter,
  selectNumOpenIssuesRange,
  selectProgrammingLanguageFilter,
  selectProgrammingLanguageList
} from '../state/github-repo.selectors';
import { GithubRepo } from '../model/github-repo';
import { NumberRange } from '../../model/number-range';

@Injectable()
export class GithubRepoStateService {
  readonly githubRepoList$: Observable<Array<GithubRepoLite>> =
    this.store$.pipe(
      select(selectGithubRepoListFiltered)
    );
  readonly githubRepoListIsLoading$: Observable<boolean> =
    this.store$.pipe(
      select(selectGithubRepoListIsLoading)
    );
  readonly activeGithubRepo$: Observable<GithubRepo> =
    this.store$.pipe(
      select(selectActiveGithubRepo)
    );
  readonly numOpenIssuesRange$: Observable<NumberRange> =
    this.store$.pipe(
      select(selectNumOpenIssuesRange)
    );
  readonly numMaxOpenIssuesFilter$: Observable<number> =
    this.store$.pipe(
      select(selectNumMaxOpenIssuesFilter)
    );
  readonly programmingLanguageFilter$: Observable<string> =
    this.store$.pipe(
      select(selectProgrammingLanguageFilter)
    );
  readonly programmingLanguageList$: Observable<Array<string>> =
    this.store$.pipe(
      select(selectProgrammingLanguageList)
    );

  constructor(private store$: Store<AppState>) {
  }

  searchGithubRepo(query: string): void {
    this.store$.dispatch(searchGithubRepo({query}));
  }

  fetchGithubRepoInfo(owner: string, name: string): void {
    this.store$.dispatch(fetchGithubRepoInfo({owner, name}));
  }

  filterGithubRepoList(filterPatch: GithubRepoListFilterPatch): void {
    this.store$.dispatch(filterGithubRepoList({filterPatch}));
  }

  resetGithubRepoList(): void {
    this.store$.dispatch(resetGithubRepoList());
  }

  resetGithubRepoListFilter(): void {
    this.store$.dispatch(resetGithubRepoListFilter());
  }
}
