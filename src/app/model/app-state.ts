import { GithubRepoState } from '../github-repo/model/github-repo-state';

export interface AppState {
  githubRepo: GithubRepoState;
}
