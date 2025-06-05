import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path: 'compagnia',
    children: [
      {
        path: 'cast',
        loadComponent: () =>
          import('./pages/compagnia/cast/cast.component').then(
            (m) => m.CastComponent)
      },
      {
        path: 'spettacoli',
        loadComponent: () => import('./pages/compagnia/spettacoli/spettacoli.component').then(
          (m)=>m.SpettacoliComponent)
      }
    ]
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
    path: 'grest',
    loadComponent: () =>
      import('./pages/grest/grest.component').then(
        (m) => m.GrestComponent
      ),
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./pages/about-us/about-us.component').then(
        (m) => m.AboutUsComponent
      ),
  },
  {
    path: '404',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent),
  },
  {
    path: '**',
    redirectTo: '404'
  },
];
