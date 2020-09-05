import { NgModule } from '@angular/core';
import { GithubRepoRoutingModule } from './github-repo-routing.module';
import { GithubRepoSearchPageComponent } from './page/github-repo-search-page/github-repo-search-page.component';
import { GithubRepoInfoPageComponent } from './page/github-repo-info-page/github-repo-info-page.component';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule
} from '@angular/common/http';
import { ApiUrlBasePrependInterceptor } from './service/api-url-base-prepend.interceptor';
import { GithubRepoApiService } from './service/github-repo-api.service';
import { StoreModule } from '@ngrx/store';
import { githubRepoReducer } from './state/github-repo.reducer';
import { GithubRepoStateService } from './service/github-repo-state.service';
import { EffectsModule } from '@ngrx/effects';
import { GithubRepoEffects } from './state/github-repo.effects';

@NgModule({
  imports: [
    GithubRepoRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('githubRepo', githubRepoReducer),
    EffectsModule.forFeature([GithubRepoEffects])
  ],
  declarations: [
    GithubRepoSearchPageComponent,
    GithubRepoInfoPageComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiUrlBasePrependInterceptor,
      multi: true
    },
    GithubRepoApiService,
    GithubRepoStateService
  ]
})
export class GithubRepoModule {

}
