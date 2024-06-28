import { Routes } from '@angular/router';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { CareerComponent } from './pages/career/career.component';
import { TrainingComponent } from './pages/training/training.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FullStackDevelopmentComponent } from './pages/full-stack-development/full-stack-development.component';
import { SapTrainingComponent } from './pages/services/sap-training/sap-training.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent },
  { path: '', component: AppShellComponent },


  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        // loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
        component: HomeComponent,
        title: 'VrikshamSoft | Home',
      },
      {
        path: 'services',
        component: ServicesComponent,
        title: 'VrikshamSoft | Services',
      },
      {
        path: 'sap-training',
        component: SapTrainingComponent,
        title: 'VrikshamSoft | Sap-Training',
      },
      {
        path: 'career',
        component: CareerComponent,
        title: 'VrikshamSoft | Career',
      },
      {
        path: 'training',
        component: TrainingComponent,
        title: 'VrikshamSoft | Training',
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
        title: 'VrikshamSoft | ContactUs',
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
        title: 'VrikshamSoft | AboutUs',
      },
      { path: 'career/full-stack-development', 
        component: FullStackDevelopmentComponent,
        title: 'VrikshamSoft | Career | Full Stack Development',
     },
     {
      path: 'privacy-policy',
      component: PrivacyPolicyComponent,
      title: 'VrikshamSoft | Privacy Policy',
     },
      {
        path: 'blog',
        component: BlogListComponent,
        title: 'VrikshamSoft | Blog',
      },
      { 
        path: 'post/:id', 
        component: BlogDetailComponent,
        title: 'VrikshamSoft | Blog',
      },
    ],
  },
];
