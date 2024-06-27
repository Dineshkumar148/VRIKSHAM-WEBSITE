import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TestimonialCardComponent } from '../../components/app-shell/components/testimonial-card/testimonial-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,TestimonialCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
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

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.initScrollAnimation();
  }

  initScrollAnimation() {
    const scrollElements = document.querySelectorAll('.scroll-animate');

    const elementInView = (el: Element, percentageScroll = 100) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
      );
    };

    const displayScrollElement = (element: Element) => {
      element.classList.add('show');
    };

    const hideScrollElement = (element: Element) => {
      element.classList.remove('show');
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 70)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
      })
    }

    window.addEventListener('scroll', () => {
      handleScrollAnimation();
    });
  }
}
