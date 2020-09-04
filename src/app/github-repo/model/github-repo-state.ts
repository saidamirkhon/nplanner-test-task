import { GithubRepoLite } from './github-repo-lite';
import { GithubRepo } from './github-repo';
import { GithubRepoListFilter } from './github-repo-list-filter';

export interface GithubRepoState {
  githubRepoList: Array<GithubRepoLite>;
  githubRepoListFilter: GithubRepoListFilter;
  activeGithubRepo: GithubRepo;
  githubRepoListIsLoading: boolean;
}
