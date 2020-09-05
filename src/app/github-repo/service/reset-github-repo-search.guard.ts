import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { GithubRepoStateService } from './github-repo-state.service';

@Injectable()
export class ResetGithubRepoSearchGuard implements CanDeactivate<any> {
  constructor(private githubRepoStateService: GithubRepoStateService) {
  }

  canDeactivate(): boolean {
    this.githubRepoStateService.resetGithubRepoList();
    this.githubRepoStateService.resetGithubRepoListFilter();
    return true;
  }
}
