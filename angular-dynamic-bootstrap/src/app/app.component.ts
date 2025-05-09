import { Component, Inject } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<ng-container *ngComponentOutlet="dynamicCmp"></ng-container>',
  imports: [NgComponentOutlet] // ✅ Fix for `ngComponentOutlet`
})
export class AppComponent {
  constructor(@Inject('dynamicCmp') public dynamicCmp: any) {}
  title = 'Angular App';
}