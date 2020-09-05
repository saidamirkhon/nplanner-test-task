import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';
import { AppState } from '../../model/app-state';
import { GithubRepoState } from '../model/github-repo-state';
import { GithubRepo } from '../model/github-repo';
import { GithubRepoLite } from '../model/github-repo-lite';
import { NumberRange } from '../../model/number-range';
import { GithubRepoListFilter } from '../model/github-repo-list-filter';

const selectGithubRepoState: MemoizedSelector<AppState, GithubRepoState> =
  createFeatureSelector<AppState, GithubRepoState>('githubRepo');
const selectGithubRepoList: MemoizedSelector<AppState, Array<GithubRepoLite>> =
  createSelector(
    selectGithubRepoState,
    (state: GithubRepoState) => state.githubRepoList
  );
export const selectGithubRepoListIsLoading: MemoizedSelector<AppState, boolean> =
  createSelector(
    selectGithubRepoState,
    (state: GithubRepoState) => state.githubRepoListIsLoading
  );
export const selectActiveGithubRepo: MemoizedSelector<AppState, GithubRepo> =
  createSelector(
    selectGithubRepoState,
    (state: GithubRepoState) => state.activeGithubRepo
  );
export const selectNumOpenIssuesRange: MemoizedSelector<AppState, NumberRange> =
  createSelector(
    selectGithubRepoList,
    (repoList: Array<GithubRepoLite>) => repoList.reduce(
      (range: NumberRange, repo: GithubRepoLite) => {
        const {min, max} = range;
        const {open_issues_count} = repo;
        if (range.min === null || open_issues_count < min) {
          range.min = open_issues_count;
        }
        if (range.max === null || open_issues_count > max) {
          range.max = open_issues_count;
        }
        return range;
      },
      {
        min: null,
        max: null
      }
    )
  );
export const selectProgrammingLanguageList: MemoizedSelector<AppState, Array<string>> =
  createSelector(
    selectGithubRepoList,
    (repoList: Array<GithubRepoLite>) => {
      const uniqueProgrammingLanguageList = repoList.reduce(
        (
          cache: {[key: string]: string},
          repo: GithubRepoLite
        ) => {
          const {language} = repo;
          if (language && !cache[language]) {
            cache[language] = language;
          }
          return cache;
        },
        {}
      );
      return Object.keys(uniqueProgrammingLanguageList);
    }
  );
const selectGithubRepoListFilter: MemoizedSelector<AppState, GithubRepoListFilter> =
  createSelector(
    selectGithubRepoState,
    (state: GithubRepoState) => state.githubRepoListFilter
  );
export const selectNumMaxOpenIssuesFilter: MemoizedSelector<AppState, number> =
  createSelector(
    selectGithubRepoListFilter,
    selectNumOpenIssuesRange,
    (
      filter: GithubRepoListFilter,
      numOpenIssuesRange: NumberRange
    ) => filter.maxOpenIssues ? filter.maxOpenIssues : numOpenIssuesRange.max
  );
export const selectProgrammingLanguageFilter: MemoizedSelector<AppState, string> =
  createSelector(
    selectGithubRepoListFilter,
    (filter: GithubRepoListFilter) => filter.programmingLanguage
  );
export const selectGithubRepoListFiltered: MemoizedSelector<AppState, Array<GithubRepoLite>> =
  createSelector(
    selectGithubRepoList,
    selectNumMaxOpenIssuesFilter,
    selectProgrammingLanguageFilter,
    (
      repoList: Array<GithubRepoLite>,
      numMaxOpenIssuesFilter: number,
      programmingLanguageFilter: string
    ) => {
      return repoList.filter(
        (repo: GithubRepoLite) =>
          repo.open_issues_count <= numMaxOpenIssuesFilter
          && programmingLanguageFilter ? repo.language === programmingLanguageFilter : true
      );
    }
  );
