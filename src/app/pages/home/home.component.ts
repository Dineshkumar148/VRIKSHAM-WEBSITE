import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TestimonialCardComponent } from '../../components/app-shell/components/testimonial-card/testimonial-card.component';
import { CourseCardComponentComponent } from '../../components/app-shell/components/course-card-component/course-card-component.component';

import { AfterViewInit } from '@angular/core';

import { BlogCarouselComponent } from '../../components/app-shell/components/blog-carousel/blog-carousel.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, TestimonialCardComponent, CourseCardComponentComponent, BlogCarouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    const weAreOffering = this.elementRef.nativeElement.querySelector('.we-are-offering');
    const coursesCount = this.elementRef.nativeElement.querySelector('#courses-count') as HTMLElement;
    const studentsCount = this.elementRef.nativeElement.querySelector('#students-count') as HTMLElement;

    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      const elementPosition = weAreOffering.offsetTop;

      if (scrollPosition > elementPosition - 700) {
        weAreOffering.classList.add('animate');
      }
    });

    this.animateNumber(coursesCount, 0, 20, 2000); // Animate from 0 to 20 in 2 seconds
    this.animateNumber(studentsCount, 0, 1200, 2000); // Animate from 0 to 1200 in 2 seconds
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

  private animateNumber(
    element: HTMLElement,
    start: number,
    end: number,
    duration: number
  ): void {
    let startTime: number | null = null;

    const step = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      element.textContent = Math.floor(progress * (end - start) + start).toString() + '+';
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }
  
}
