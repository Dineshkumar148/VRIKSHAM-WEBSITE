import { Component } from '@angular/core';

@Component({
  selector: 'app-services-works-card',
  standalone: true,
  imports: [],
  templateUrl: './services-works-card.component.html',
  styleUrl: './services-works-card.component.scss'
})
export class ServicesWorksCardComponent {
  offerings = [
    {
      icon: 'bi bi-box-seam',
      title: 'Choose packages',
      description: 'We offer a variety of packages to suit different business requirements and professional goals.'
    },
    {
      icon: 'bi bi-calendar2-event',
      title: 'Schedule appointment',
      description: 'Whether you\'re interested in a consultation, need support, or want to discuss training options, we\'re here to help.'
    },
    {
      icon: 'bi bi-graph-up-arrow',
      title: 'Grow together',
      description: 'We believe in the power of growth through collaboration and continuous learning options, we\'re here to help'
    }
  ];
}
