import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout';
import { LoginComponent } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { authGuard } from './guards/auth-guard';
export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'main',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
  {
    path: 'app',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
      // {
      //   path: 'users', component: UsersComponent
      // },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];
