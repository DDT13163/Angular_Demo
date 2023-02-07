import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective {
  @Input() appHighlight = 'blue';

  constructor(private el: ElementRef) {
    console.log('HighLightDirective');
  }

  ngOnInit(): void {
    this.el.nativeElement.style.color = this.appHighlight;
  }

}
export { ElementRef };

