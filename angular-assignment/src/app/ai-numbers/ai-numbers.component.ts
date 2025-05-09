import { Component } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling'; // ✅ Import ScrollingModule

@Component({
  selector: 'app-ai-numbers',
  standalone: true, // ✅ Must be standalone
  templateUrl: './ai-numbers.component.html',
  styleUrls: ['./ai-numbers.component.css'],
  imports: [ScrollingModule] // ✅ Import ScrollingModule for virtual scrolling
})
export class AiNumbersComponent {
  aiNumbers: number[] = Array.from({ length: 10001 }, (_, i) => i);
}