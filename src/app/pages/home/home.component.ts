import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TestimonialCardComponent } from '../../components/app-shell/components/testimonial-card/testimonial-card.component';
import { CourseCardComponentComponent } from '../../components/app-shell/components/course-card-component/course-card-component.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, TestimonialCardComponent, CourseCardComponentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    const weAreOffering = this.elementRef.nativeElement.querySelector('.we-are-offering');

    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      const elementPosition = weAreOffering.offsetTop;

      if (scrollPosition > elementPosition - 700) {
        weAreOffering.classList.add('animate');
      }
    });
  }
}
