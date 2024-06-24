import { Component } from '@angular/core';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [],
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
