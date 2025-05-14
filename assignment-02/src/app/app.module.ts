import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppComponent } from './app.component';
import { TrainingComponent } from './training/training.component';
import { ReversePipe } from './reverse.pipe';
import { AsyncPipe, CommonModule } from '@angular/common';
 
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppComponent,
    ReversePipe,
    TrainingComponent,
    CommonModule,
    AsyncPipe
  ],
  providers: [],
  // Removed bootstrap array as AppComponent is a standalone component
})
export class AppModule { }