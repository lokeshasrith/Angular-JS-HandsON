import { ApplicationConfig, Provider } from '@angular/core';
import { DatabaseCmpComponent } from './database-cmp/database-cmp.component';
import { UIToolsComponent } from './uitools/uitools.component';

const dynamicComponent = Math.random() > 0.5 ? DatabaseCmpComponent : UIToolsComponent;

export const appConfig: ApplicationConfig = {
  providers: [{ provide: 'dynamicCmp', useValue: dynamicComponent } as Provider]
};