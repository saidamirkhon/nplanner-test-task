import {
  createAction,
  props
} from '@ngrx/store';
import { GithubRepoLite } from '../model/github-repo-lite';
import { GithubRepo } from '../model/github-repo';
import { GithubRepoListFilterPatch } from '../model/github-repo-list-filter-patch';

export const searchGithubRepo = createAction(
  '[Github Repo] Find repo',
  props<{query: string}>()
);
export const searchGithubRepoSuccess = createAction(
  '[Github Repo] Search repo success',
  props<{githubRepoList: Array<GithubRepoLite>}>()
);
export const searchGithubRepoFail = createAction(
  '[Github Repo] Search repo fail'
);
export const fetchGithubRepoInfo = createAction(
  '[Github Repo] Fetch repo info',
  props<{owner: string, name: string}>()
);
export const fetchGithubRepoInfoSuccess = createAction(
  '[Github Repo] Fetch repo info success',
  props<{repoInfo: GithubRepo}>()
);
export const fetchGithubRepoInfoFail = createAction(
  '[Github Repo] Fetch repo fail'
);
export const filterGithubRepoList = createAction(
  '[Github Repo] Filter repo list',
  props<{filterPatch: GithubRepoListFilterPatch}>()
);
export const resetGithubRepoList = createAction(
  '[Github Repo] Reset repo list'
);
export const resetGithubRepoListFilter = createAction(
  '[Github Repo] Reset repo list filter'
);
