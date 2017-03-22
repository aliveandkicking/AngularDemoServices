import { Directive, Input ,ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickEvent]'
})
export class ClickEventDirective {

  constructor(private el: ElementRef) { }

  @Input('main-color-channel') mainColorChannel: string

  ngOnInit() { }

  @HostListener('click') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.getColor();
  }

  getColor() {
    let firstChannel = (Math.floor(Math.random() * 176) + 80).toString(16);
    let secondChannel = (Math.floor(Math.random() * 176) + 80).toString(16);

    if (this.mainColorChannel == 'green') {
      return '#' + firstChannel + 'FF' + secondChannel      
    } else if (this.mainColorChannel == 'red') {
      return '#' + 'FF' + firstChannel + secondChannel            
    } else if (this.mainColorChannel == 'blue') {
      return '#' + firstChannel + secondChannel + 'FF'
    } else {
      return '#' + firstChannel + secondChannel + firstChannel      
    }

  }

}
