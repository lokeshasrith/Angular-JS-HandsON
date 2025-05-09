import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { CustomButtonComponent } from './custom-button/custom-button.component';

@NgModule({
  imports: [BrowserModule, CustomButtonComponent],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(CustomButtonComponent, { injector: this.injector });
    customElements.define('custom-button', customButton);
  }

  ngDoBootstrap() {} // Required since Angular Elements removes normal bootstrapping
}