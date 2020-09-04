import { Entity } from '../../model/entity';
import { GithubRepoOwner } from './github-repo-owner';

export interface GithubRepoLite extends Entity {
  name: string;
  description: string;
  html_url: string;
  language: string;
  open_issues_count: number;
  owner: GithubRepoOwner;
}
