import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './core/auth.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
