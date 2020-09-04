import { Injectable } from '@angular/core';
import { AppState } from '../../model/app-state';
import { Store } from '@ngrx/store';
import {
  fetchGithubRepoInfo,
  filterGithubRepoList,
  resetGithubRepoList,
  resetGithubRepoListFilter,
  searchGithubRepo
} from '../state/github-repo.actions';
import { GithubRepoListFilterPatch } from '../model/github-repo-list-filter-patch';

@Injectable()
export class GithubRepoStateService {

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
