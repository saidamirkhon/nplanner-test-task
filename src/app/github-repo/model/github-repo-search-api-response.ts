import { GithubRepoLite } from './github-repo-lite';

export interface GithubRepoSearchApiResponse {
  items: Array<GithubRepoLite>;
}
