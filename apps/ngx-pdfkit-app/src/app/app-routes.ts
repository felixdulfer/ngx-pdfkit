import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'a',
    loadChildren: () =>
      import('./test-a/test-a.module').then((m) => m.TestAModule),
  },
  {
    path: 'b',
    loadChildren: () =>
      import('./test-b/test-b.module').then((m) => m.TestBModule),
  },
];
