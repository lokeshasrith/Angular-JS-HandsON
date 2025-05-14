import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Needed for input binding
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        FormsModule, // Add this for [(ngModel)]
        AppComponent,
        HighlightDirective
    ],
    providers: [],
    // Removed bootstrap array as AppComponent is standalone
})
export class AppModule { }