import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent {
  @Input() label: string = 'Click Me';

  handleClick() {
    alert(`Button clicked! Label: ${this.label}`);
  }
}