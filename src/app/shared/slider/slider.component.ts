import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { NumberRange } from '../../model/number-range';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent {
  @Output() sliderChange: EventEmitter<number> = new EventEmitter();
  @Input() range: NumberRange;
  @Input() initialValue: number;
}
