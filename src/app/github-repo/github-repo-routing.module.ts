import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GithubRepoPath } from './enum/github-repo-path';
import { GithubRepoSearchPageComponent } from './page/github-repo-search-page/github-repo-search-page.component';
import { GithubRepoInfoPageComponent } from './page/github-repo-info-page/github-repo-info-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        redirectTo: GithubRepoPath.SEARCH,
        pathMatch: 'full'
      },
      {
        path: GithubRepoPath.SEARCH,
        component: GithubRepoSearchPageComponent
      },
      {
        path: GithubRepoPath.INFO,
        component: GithubRepoInfoPageComponent
      },
      {
        path: '**',
        redirectTo: GithubRepoPath.SEARCH
      }
    ])
  ],
  exports: [RouterModule]
})
export class GithubRepoRoutingModule {

}
