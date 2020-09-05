import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { GithubRepoStateService } from '../../service/github-repo-state.service';
import { Observable } from 'rxjs';
import { GithubRepo } from '../../model/github-repo';

@Component({
  selector: 'app-github-repo-info-page',
  templateUrl: './github-repo-info-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubRepoInfoPageComponent {
  activeGithubRepo$: Observable<GithubRepo> = this.githubRepoStateService.activeGithubRepo$;

  constructor(private githubRepoStateService: GithubRepoStateService) {
  }
}
