import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'list1',
    loadComponent: () => import('./pages/list1/list1.page').then( m => m.List1Page)
  },
  {
    path: 'list3',
    loadComponent: () => import('./pages/list3/list3.page').then( m => m.List3Page)
  },
  {
    path: 'list2',
    loadComponent: () => import('./pages/list2/list2.page').then( m => m.List2Page)
  },
];
