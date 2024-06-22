import { Routes } from '@angular/router';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { CareerComponent } from './pages/career/career.component';
import { TrainingComponent } from './pages/training/training.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: 'home',
        // loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
        component: HomeComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: 'career',
        component: CareerComponent,
      },
      {
        path: 'training',
        component: TrainingComponent,
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },
    ],
  },
];
