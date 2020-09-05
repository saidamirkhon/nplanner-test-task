import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output
} from '@angular/core';
import {
  fromEvent,
  Subject
} from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  takeUntil,
  tap
} from 'rxjs/operators';

@Directive({
  selector: '[appSearch]'
})
export class SearchInputDirective implements AfterViewInit, OnDestroy {
  @Output('appSearch') search: EventEmitter<string> = new EventEmitter<string>();
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private elementRef: ElementRef<HTMLInputElement>) {
  }

  ngAfterViewInit(): void {
    if (this.elementRef) {
      const inputElement = this.elementRef.nativeElement;
      if (inputElement) {
        this.listenToElementKeyUp(inputElement);
      }
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  private listenToElementKeyUp(element: HTMLInputElement): void {
    fromEvent(element, 'keyup')
      .pipe(
        debounceTime(300),
        map((event: any) => event.target.value.trim()),
        distinctUntilChanged(),
        tap((value: string) => this.search.emit(value)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
