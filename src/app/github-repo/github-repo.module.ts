import { NgModule } from '@angular/core';
import { GithubRepoRoutingModule } from './github-repo-routing.module';
import { GithubRepoSearchPageComponent } from './page/github-repo-search-page/github-repo-search-page.component';
import { GithubRepoInfoPageComponent } from './page/github-repo-info-page/github-repo-info-page.component';

@NgModule({
  imports: [
    GithubRepoRoutingModule
  ],
  declarations: [
    GithubRepoSearchPageComponent,
    GithubRepoInfoPageComponent
  ]
})
export class GithubRepoModule {

}
