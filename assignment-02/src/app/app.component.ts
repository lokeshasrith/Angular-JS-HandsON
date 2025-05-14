import { Component } from '@angular/core';
import { TrainingComponent } from "./training/training.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TrainingComponent],
})
export class AppComponent {
  title = 'training-app';
}
