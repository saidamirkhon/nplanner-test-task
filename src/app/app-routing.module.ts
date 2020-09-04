import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppPath } from './enum/app-path';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: AppPath.GITHUB_REPO,
          pathMatch: 'full'
        },
        {
          path: AppPath.GITHUB_REPO,
          loadChildren: () => import('./github-repo/github-repo.module').then(m => m.GithubRepoModule)
        },
        {
          path: '**',
          redirectTo: AppPath.GITHUB_REPO
        }
      ]
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
