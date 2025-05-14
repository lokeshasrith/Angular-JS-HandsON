import { Directive, HostBinding, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() appHighlight = 'yellow';  // Default color
  private originalColor = '';
  @HostBinding('style.backgroundColor') bgColor!: string;
  @HostListener('mouseenter') onMouseEnter() {
    this.originalColor = this.bgColor || '';
    this.bgColor = this.appHighlight;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = this.originalColor;
  }
}