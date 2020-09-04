import { GithubRepoState } from '../model/github-repo-state';

export const GITHUB_REPO_DEFAULT_STATE: GithubRepoState = {
  activeGithubRepo: null,
  githubRepoList: [],
  githubRepoListIsLoading: false,
  githubRepoListFilter: {
    maxOpenIssues: 0,
    programmingLanguage: ''
  }
};
