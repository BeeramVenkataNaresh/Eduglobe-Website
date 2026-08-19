import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { environment } from './environments/environment';

document.title = `${environment.customer.brandName} ${environment.customer.brandTagline}`;

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
