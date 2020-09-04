import { GithubRepoLite } from './github-repo-lite';
import { GithubRepoLicense } from './github-repo-license';

export interface GithubRepo extends GithubRepoLite {
  topics: Array<string>;
  license: GithubRepoLicense;
}
