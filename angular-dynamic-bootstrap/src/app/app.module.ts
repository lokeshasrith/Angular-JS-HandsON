import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatabaseCmpComponent } from './database-cmp/database-cmp.component';
import { UIToolsComponent } from './uitools/uitools.component';

@NgModule({
  declarations: [], // ✅ Components must be declared here
  imports: [BrowserModule, DatabaseCmpComponent, UIToolsComponent],
  // Removed 'entryComponents' as it is no longer needed in Angular 9+
})
export class AppModule {
  ngDoBootstrap(appRef: ApplicationRef) {
    const componentToBootstrap = Math.random() > 0.5 ? DatabaseCmpComponent : UIToolsComponent;
    appRef.bootstrap(componentToBootstrap);
  }
}