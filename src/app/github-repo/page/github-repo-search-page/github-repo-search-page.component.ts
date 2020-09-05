import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { Observable } from 'rxjs';
import { GithubRepoStateService } from '../../service/github-repo-state.service';
import { GithubRepoLite } from '../../model/github-repo-lite';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import { GithubRepoPath } from '../../enum/github-repo-path';

@Component({
  selector: 'app-github-repo-search-page',
  templateUrl: './github-repo-search-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubRepoSearchPageComponent {
  readonly repoListIsLoading$: Observable<boolean> = this.githubRepoStateService.githubRepoListIsLoading$;
  readonly repoList$: Observable<Array<GithubRepoLite>> = this.githubRepoStateService.githubRepoList$;

  constructor(
    private githubRepoStateService: GithubRepoStateService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  searchRepo(query: string): void {
    this.githubRepoStateService.searchGithubRepo(query);
  }

  showRepoDetails(repo: GithubRepoLite): void {
    this.router.navigate(
      [GithubRepoPath.INFO],
      {
        relativeTo: this.route.parent,
        queryParams: {
          name: repo.name,
          owner: repo.owner.login
        }
      }
    );
  }
}
