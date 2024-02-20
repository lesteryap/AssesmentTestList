import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'list1',
        loadComponent: () =>
          import('../list1/list1.page').then((m) => m.List1Page),
      },
      {
        path: 'list2',
        loadComponent: () =>
          import('../list2/list2.page').then((m) => m.List2Page),
      },
      {
        path: 'list3',
        loadComponent: () =>
          import('../list3/list3.page').then((m) => m.List3Page),
      },
      {
        path: '',
        redirectTo: '/tabs/list3',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/list3',
    pathMatch: 'full',
  },
];
