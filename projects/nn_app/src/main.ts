import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { APP_CONFIG } from '@app/app.config';

// eslint-disable-next-line no-console
bootstrapApplication(App, APP_CONFIG).catch((err) => console.error(err));
