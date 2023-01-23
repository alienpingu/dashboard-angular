import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appUnderline]',
})
export class UnderlineDirective {
  @Input() appUnderline = 'list';
  constructor(private el: ElementRef) {
    if (this.appUnderline === el.nativeElement.id) {
      
      this.el.nativeElement.style.textDecoration = 'underline';
    }
  }
}
