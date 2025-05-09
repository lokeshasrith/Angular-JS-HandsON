import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // ✅ Import RouterModule
import { AppComponent } from './app.component';
import { AiNumbersComponent } from './ai-numbers/ai-numbers.component';

const routes: Routes = [
  { path: '', component: AppComponent }, // ✅ Default Route
  { path: 'ai-numbers', component: AiNumbersComponent } // ✅ Add Route for 'ai-numbers'
];

@NgModule({
  declarations: [], // ✅ Only declare non-standalone components
  imports: [BrowserModule, RouterModule.forRoot(routes), AppComponent, AiNumbersComponent], // ✅ Import standalone component
  // Removed bootstrap array as AppComponent is standalone
})
export class AppModule {}