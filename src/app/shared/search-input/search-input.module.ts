import { NgModule } from '@angular/core';
import { SearchInputDirective } from './search-input.directive';

@NgModule({
  declarations: [
    SearchInputDirective
  ],
  exports: [
    SearchInputDirective
  ]
})
export class SearchInputModule {
}
