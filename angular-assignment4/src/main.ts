import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { CricketPlayersComponent } from './app/cricket-players/cricket-players.component';

const routes = [
  { path: '', component: AppComponent },
  { path: 'cricket-players', component: CricketPlayersComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));