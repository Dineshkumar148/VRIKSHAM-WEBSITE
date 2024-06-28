import { Component } from '@angular/core';
import { ServicesWorksCardComponent } from '../../components/app-shell/components/services-works-card/services-works-card.component';
import { TestimonialCardComponent } from '../../components/app-shell/components/testimonial-card/testimonial-card.component';
import { TopHeaderSectionComponent } from '../../components/app-shell/components/top-header-section/top-header-section.component';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [TopHeaderSectionComponent, ServicesWorksCardComponent, TestimonialCardComponent],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent {
  
  cardDetails = [
    {
      icon: 'assets/images/library_icon.svg',
      heading: 'Learning Format',
      paragraph: 'Offline(Classroom)'
    },
    {
      icon: 'assets/images/duration-icon.svg',
      heading: 'Duration',
      paragraph: '6 Months'
    },
    {
      icon: 'assets/images/placement-icon.svg',
      heading: 'Placements',
      paragraph: '100%'
    },
    {
      icon: 'assets/images/emi-icon.svg',
      heading: 'No Cost EMI Starts',
      paragraph: 'at ₹4999/month*'
    }
  ];

}
