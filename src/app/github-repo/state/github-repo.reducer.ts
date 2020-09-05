import {
  Action,
  ActionReducer,
  createReducer,
  on
} from '@ngrx/store';
import { GithubRepoState } from '../model/github-repo-state';
import { GITHUB_REPO_DEFAULT_STATE } from '../constant/github-repo-default-state';
import {
  fetchGithubRepoInfoSuccess,
  filterGithubRepoList,
  searchGithubRepo,
  searchGithubRepoFail,
  searchGithubRepoSuccess
} from './github-repo.actions';
import { GithubRepoLite } from '../model/github-repo-lite';
import { GithubRepoListFilterPatch } from '../model/github-repo-list-filter-patch';
import { GithubRepo } from '../model/github-repo';

const reducer: ActionReducer<GithubRepoState> = createReducer(
  GITHUB_REPO_DEFAULT_STATE,
  on(
    searchGithubRepo,
    (state: GithubRepoState): GithubRepoState => {
      return {
        ...state,
        githubRepoListIsLoading: true
      };
    }
  ),
  on(
    searchGithubRepoSuccess,
    (state: GithubRepoState, action: {repoList: Array<GithubRepoLite>}): GithubRepoState => {
      return {
        ...state,
        githubRepoList: action.repoList,
        githubRepoListIsLoading: false
      };
    }
  ),
  on(
    searchGithubRepoFail,
    (state: GithubRepoState): GithubRepoState => {
      return {
        ...state,
        githubRepoListIsLoading: false
      };
    }
  ),
  on(
    fetchGithubRepoInfoSuccess,
    (state: GithubRepoState, action: {repo: GithubRepo}): GithubRepoState => {
      return {
        ...state,
        activeGithubRepo: action.repo,
        githubRepoListIsLoading: false
      };
    }
  ),
  on(
    filterGithubRepoList,
    (state: GithubRepoState, action: {filterPatch: GithubRepoListFilterPatch}): GithubRepoState => {
      return {
        ...state,
        githubRepoListFilter: {
          ...state.githubRepoListFilter,
          ...action.filterPatch
        }
      };
    }
  )
);

export function githubRepoReducer(state: GithubRepoState, action: Action): GithubRepoState {
  return reducer(state, action);
}
