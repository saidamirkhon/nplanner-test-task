import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild
} from '@angular/core';
import { GithubRepoLite } from '../../model/github-repo-lite';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepoListComponent implements OnChanges {
  @Input() repoList: Array<GithubRepoLite> = [];
  @Output() showRepoDetails: EventEmitter<GithubRepoLite> = new EventEmitter();
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = [
    'name',
    'description',
    'language',
    'open_issues_count',
    'url',
    'details'
  ];
  dataSource: MatTableDataSource<GithubRepoLite>;

  trackByRepoId(index: number, repo: GithubRepoLite): number {
    return repo.id;
  }

  ngOnChanges(): void {
    if (this.repoList) {
      this.setTableDataSource(this.repoList);
    }
  }

  private setTableDataSource(repoList: Array<GithubRepoLite>): void {
    this.dataSource = new MatTableDataSource<GithubRepoLite>(repoList);
    this.dataSource.sort = this.sort;
  }
}
