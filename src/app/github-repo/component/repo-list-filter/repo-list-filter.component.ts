import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { NumberRange } from '../../../model/number-range';

@Component({
  selector: 'app-repo-list-filter',
  templateUrl: './repo-list-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepoListFilterComponent {
  @Output() maxOpenIssuesChange: EventEmitter<number> = new EventEmitter();
  @Output() programmingLanguageChange: EventEmitter<string> = new EventEmitter();
  @Input() numOpenIssuesRange: NumberRange;
  @Input() maxOpenIssues: number;
  @Input() programmingLanguageList: Array<string> = [];
}
