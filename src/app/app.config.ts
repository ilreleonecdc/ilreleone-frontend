import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter, withViewTransitions, withInMemoryScrolling } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';
import { MyBrandPreset } from '../assets/myPreset';
import { MessageService } from 'primeng/api';
import { provideHttpClient } from '@angular/common/http';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser';
import { MyHammerConfig } from './pages/compagnia/cast/cast.component';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration: 'enabled'})),
    provideAnimationsAsync(),
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
    importProvidersFrom(HammerModule),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: MyBrandPreset,
        options: {
          cssLayer: false,
          darkModeSelector: false || 'none',
          prefix: 'p',
        }
      }
    }),
    MessageService,
    provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })
  ],
};
