import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'spettacolo',
    loadComponent: () =>
      import('./pages/spettacolo/spettacolo.component').then(
        (m) => m.SpettacoloComponent
      ),
  },
  {
    path: 'compagnia',
    loadComponent: () =>
      import('./pages/compagnia/compagnia.component').then(
        (m) => m.CompagniaComponent
      ),
  },
  {
    path: 'eventi',
    loadComponent: () =>
      import('./pages/eventi/eventi.component').then((m) => m.EventiComponent),
  },
  {
    path: 'galleria',
    loadComponent: () =>
      import('./pages/galleria/galleria.component').then(
        (m) => m.GalleriaComponent
      ),
  },
  {
    path: 'contatti',
    loadComponent: () =>
      import('./pages/contatti/contatti.component').then(
        (m) => m.ContattiComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
