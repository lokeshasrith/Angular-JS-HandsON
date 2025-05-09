import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { AiNumbersComponent } from './app/ai-numbers/ai-numbers.component';

const routes = [
  { path: '', component: AppComponent },
  { path: 'ai-numbers', component: AiNumbersComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));