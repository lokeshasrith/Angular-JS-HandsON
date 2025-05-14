import { Component } from '@angular/core';
import { ReversePipe } from "../reverse.pipe";
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
  standalone: true,
  imports: [ReversePipe, AsyncPipe, CommonModule]
})
export class TrainingComponent {

  // Part b: Array of JSON training data
  trainings = [
    { requestNo: 'TR001', name: 'Angular Basics', mode: 'Online', duration: '3 days' },
    { requestNo: 'TR002', name: 'ReactJS Advanced', mode: 'Offline', duration: '5 days' },
    { requestNo: 'TR003', name: 'Vue Fundamentals', mode: 'Online', duration: '2 days' }
  ];

  // Getter to return sorted list
  get sortedTrainings() {
    return this.trainings.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Part c: Async property using Promise
  valuePromise: Promise<string>;

  constructor() {
    this.valuePromise = new Promise(resolve => {
      setTimeout(() => resolve('Training Data Loaded!'), 2000);
    });
  }
}