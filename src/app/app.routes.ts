import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'history',
    loadComponent: () =>
      import('./history/history.component').then((m) => m.HistoryComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./unknow-page/unknow-page.component').then(
        (m) => m.UnknowPageComponent
      ),
  },
];
