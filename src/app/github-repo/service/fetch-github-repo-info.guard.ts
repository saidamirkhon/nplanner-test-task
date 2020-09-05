import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate
} from '@angular/router';
import { GithubRepoStateService } from './github-repo-state.service';

@Injectable()
export class FetchGithubRepoInfoGuard implements CanActivate {
  constructor(private githubRepoStateService: GithubRepoStateService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
  ): boolean {
    this.githubRepoStateService.fetchGithubRepoInfo(
      route.queryParamMap.get('owner'),
      route.queryParamMap.get('name'),
    );
    return true;
  }
}
