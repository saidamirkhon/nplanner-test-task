import { NgModule } from '@angular/core';
import { SliderComponent } from './slider.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [
    MatSliderModule
  ],
  declarations: [
    SliderComponent
  ],
  exports: [
    SliderComponent
  ],
})
export class SliderModule {

}
