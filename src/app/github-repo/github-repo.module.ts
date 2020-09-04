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

@NgModule({
  imports: [
    GithubRepoRoutingModule,
    HttpClientModule,
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
    GithubRepoApiService
  ]
})
export class GithubRepoModule {

}
