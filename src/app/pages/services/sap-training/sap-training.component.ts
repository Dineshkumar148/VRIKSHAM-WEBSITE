import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CourseCardComponentComponent } from '../../../components/app-shell/components/course-card-component/course-card-component.component';
import { TopHeaderSectionComponent } from '../../../components/app-shell/components/top-header-section/top-header-section.component';
import { TestimonialCardComponent } from '../../../components/app-shell/components/testimonial-card/testimonial-card.component';
import { StudentsWorkingCompanyComponent } from '../../../components/app-shell/components/students-working-company/students-working-company.component';

@Component({
  selector: 'app-sap-training',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    TopHeaderSectionComponent,
    CourseCardComponentComponent,
    TestimonialCardComponent,
    StudentsWorkingCompanyComponent
  ],
  templateUrl: './sap-training.component.html',
  styleUrl: './sap-training.component.scss',
})
export class SapTrainingComponent implements AfterViewInit {
  cardDetails = [
    {
      icon: 'assets/images/library_icon.svg',
      heading: 'Learning Format',
      paragraph: 'Offline(Classroom)',
    },
    {
      icon: 'assets/images/duration-icon.svg',
      heading: 'Duration',
      paragraph: '6 Months',
    },
    {
      icon: 'assets/images/placement-icon.svg',
      heading: 'Placements',
      paragraph: '100%',
    },
    {
      icon: 'assets/images/emi-icon.svg',
      heading: 'No Cost EMI Starts',
      paragraph: 'at ₹4999/month*',
    },
  ];

  benefits = [
    {
      icon: 'assets/images/vriksham-classroom-format.svg',
      heading: 'Classroom Format',
      paragraph:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      icon: 'assets/images/vriksham-real-time-projects.svg',
      heading: 'Work on real-life Industry Projects',
      paragraph:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      icon: 'assets/images/vriksham-placement-assistance.svg',
      heading: 'Placement Assistance',
      paragraph:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      icon: 'assets/images/vriksham-emi.svg',
      heading: 'EMI No Cost EMI',
      paragraph:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      icon: 'assets/images/vriksham-live-class.svg',
      heading: 'Live online class test',
      paragraph:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      icon: 'assets/images/vriksham-skill.svg',
      heading: 'Recognized skill certifications',
      paragraph:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  ngAfterViewInit(): void {
    const paths = [
      document.getElementById('anim1') as unknown as SVGAnimateElement,
      document.getElementById('anim2') as unknown as SVGAnimateElement,
      document.getElementById('anim3') as unknown as SVGAnimateElement,
      document.getElementById('anim4') as unknown as SVGAnimateElement,
      document.getElementById('anim5') as unknown as SVGAnimateElement,
      document.getElementById('anim6') as unknown as SVGAnimateElement,
    ];

    function restartAnimations() {
      paths.forEach((anim, index) => {
        anim.beginElement();
      });
    }

    // Listen for the end of the last animation to restart the sequence
    paths[5].addEventListener('endEvent', restartAnimations);

    // Initial start
    restartAnimations();
  }
}
