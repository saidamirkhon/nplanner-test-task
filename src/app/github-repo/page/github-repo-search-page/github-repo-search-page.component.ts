import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { Observable } from 'rxjs';
import { GithubRepoStateService } from '../../service/github-repo-state.service';

@Component({
  selector: 'app-github-repo-search-page',
  templateUrl: './github-repo-search-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubRepoSearchPageComponent {
  readonly repoListIsLoading$: Observable<boolean> = this.githubRepoStateService.githubRepoListIsLoading$;

  constructor(private githubRepoStateService: GithubRepoStateService) {
  }

  searchRepo(query: string): void {
    this.githubRepoStateService.searchGithubRepo(query);
  }
}
