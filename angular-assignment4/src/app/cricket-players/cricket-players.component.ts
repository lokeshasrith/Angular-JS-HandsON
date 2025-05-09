import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule for directives
import { CdkDragDrop, moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-cricket-players',
  standalone: true,
  templateUrl: './cricket-players.component.html',
  styleUrls: ['./cricket-players.component.css'],
  imports: [CommonModule, DragDropModule] // ✅ Include CommonModule for *ngFor
})
export class CricketPlayersComponent {
  players: string[] = [
    'Virat Kohli', 'Rohit Sharma', 'MS Dhoni', 'Sachin Tendulkar', 'Rahul Dravid',
    'Kapil Dev', 'Sourav Ganguly', 'Yuvraj Singh', 'Harbhajan Singh', 'Zaheer Khan',
    'Jasprit Bumrah', 'Ravindra Jadeja', 'Shikhar Dhawan', 'KL Rahul', 'Rishabh Pant'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.players, event.previousIndex, event.currentIndex);
  }
}