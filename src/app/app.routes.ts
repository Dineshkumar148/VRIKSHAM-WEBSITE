import { Routes } from '@angular/router';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { CareerComponent } from './pages/career/career.component';
import { TrainingComponent } from './pages/training/training.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FullStackDevelopmentComponent } from './pages/full-stack-development/full-stack-development.component';
import { SapTrainingComponent } from './pages/services/sap-training/sap-training.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';

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
        path: 'sap-training',
        component: SapTrainingComponent,
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
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'career/full-stack-development',
        component: FullStackDevelopmentComponent,
      },
      {
        path: 'blog',
        component: BlogListComponent 
      },
      { 
        path: 'post/:id', 
        component: BlogDetailComponent 
      },
    ],
  },
];
