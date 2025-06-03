import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';
import { MyBrandPreset } from '../assets/myPreset';
import { MessageService } from 'primeng/api';
import { provideHttpClient } from '@angular/common/http';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser';
import { MyHammerConfig } from './pages/compagnia/cast/cast.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
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
    MessageService
  ],
};
