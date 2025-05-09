import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AiNumbersComponent } from "./ai-numbers/ai-numbers.component";

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Must be standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, AiNumbersComponent] // ✅ Import RouterModule for routing
 // ✅ Import RouterModule for routing
})

export class AppComponent {
  title = 'angular-assignment';
}