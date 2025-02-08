import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    title: 'gp',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),

  },
  {
    path: 'search',
    title: 'gp',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),

  },
  {
    path: 'calendar',
    title: 'gp - calendar',
    loadComponent: () => import('./pages/calendar/calendar.component').then(c => c.CalendarComponent),

  },
  {
    path: 'budget',
    title: 'gp - budget',
    loadComponent: () => import('./pages/budget/budget.component').then(c => c.BudgetComponent),

  },
  {
    path: '**',
    title: 'something went wrong',
    loadComponent: () => import('./pages/error/error.component').then(c => c.ErrorComponent),

  },

];
