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
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { SearchInputModule } from '../shared/search-input/search-input.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { RepoListComponent } from './component/repo-list/repo-list.component';
import { MatButtonModule } from '@angular/material/button';
import { SliderModule } from '../shared/slider/slider.module';
import { RepoListFilterComponent } from './component/repo-list-filter/repo-list-filter.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FetchGithubRepoInfoGuard } from './service/fetch-github-repo-info.guard';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ResetGithubRepoSearchGuard } from './service/reset-github-repo-search.guard';

@NgModule({
  imports: [
    GithubRepoRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('githubRepo', githubRepoReducer),
    EffectsModule.forFeature([GithubRepoEffects]),
    MatInputModule,
    MatProgressSpinnerModule,
    SearchInputModule,
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    SliderModule,
    MatAutocompleteModule,
    MatCardModule,
    MatChipsModule
  ],
  declarations: [
    GithubRepoSearchPageComponent,
    GithubRepoInfoPageComponent,
    RepoListComponent,
    RepoListFilterComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiUrlBasePrependInterceptor,
      multi: true
    },
    GithubRepoApiService,
    GithubRepoStateService,
    FetchGithubRepoInfoGuard,
    ResetGithubRepoSearchGuard
  ]
})
export class GithubRepoModule {

}
