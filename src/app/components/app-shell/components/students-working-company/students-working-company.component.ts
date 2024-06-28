import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-students-working-company',
  standalone: true,
  imports: [],
  templateUrl: './students-working-company.component.html',
  styleUrls: ['./students-working-company.component.scss']
})
export class StudentsWorkingCompanyComponent implements OnInit, AfterViewInit {
  @ViewChild('carousel', { static: false })
  carousel!: ElementRef;
  
  company = [
    { image: 'assets/images/workson.png' },
    { image: 'assets/images/workson1.png' },
    { image: 'assets/images/workson2.png' },
    { image: 'assets/images/workson3.png' },
    { image: 'assets/images/workson4.png' }
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.startCarousel();
  }

  startCarousel() {
    const images = this.carousel.nativeElement.querySelectorAll('.carousel-image');
    let currentIndex = 0;
    const totalImages = images.length;

    setInterval(() => {
      images.forEach((img: HTMLElement, index: number) => {
        img.classList.remove('zoom');
      });

      images[currentIndex].classList.add('zoom');
      currentIndex = (currentIndex + 1) % totalImages;
    }, 3000);
  }
}
