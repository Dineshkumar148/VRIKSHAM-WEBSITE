import { Component } from '@angular/core';

@Component({
  selector: 'app-service-offering-card',
  standalone: true,
  imports: [],
  templateUrl: './service-offering-card.component.html',
  styleUrl: './service-offering-card.component.scss'
})
export class ServiceOfferingCardComponent {
  services = [
    {
      imgSrc: './assets/images/service-card-image-1.svg',
      title: 'SAP Training',
      description: 'SAP offers ERP software for business processes. Explore training options for modules like finance, HR, supply chain.'
    },
    {
      imgSrc: './assets/images/service-card-image-2.svg',
      title: 'SAP Consulting',
      description: 'Business Consulting in today\'s world is a necessity, in terms of knowledge transfer in an ever increasing complex business and IT scenario.'
    },
    {
      imgSrc: './assets/images/service-card-image-1.svg',
      title: 'Rollouts & Upgrades',
      description: 'The rollout of software occurs in stages for different reasons ranging from prioritizing needs to structured release management.'
    },
    {
      imgSrc: './assets/images/service-card-image-2.svg',
      title: 'Application Maintenance',
      description: 'Application Maintenance Services plays a major role in the evaluation and the performance optimization of business applications.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
