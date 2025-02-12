import { Routes } from '@angular/router';


export const routes: Routes = [

  {
    path: '',
    title: 'gp',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),

  },
  {
    path: 'repair/:id',
    title: 'gp - repair',
    loadComponent: () => import('./pages/repair/repair.component').then(c => c.RepairComponent),

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
