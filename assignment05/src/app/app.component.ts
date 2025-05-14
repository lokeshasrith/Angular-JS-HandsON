import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, HighlightDirective],
  template: `
    <div style="padding: 20px;">
      <h1>{{ title }}</h1>
      <input type="color" [(ngModel)]="selectedColor">
      <div [appHighlight]="selectedColor"
           style="padding: 20px; margin-top: 20px; border: 1px solid #ccc; background: white;">
        Hover over me to see highlighting!
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment05';
  selectedColor = '#ffff00'; // Yellow default
}