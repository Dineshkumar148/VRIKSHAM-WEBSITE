import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card-component',
  standalone: true,
  imports: [],
  templateUrl: './course-card-component.component.html',
  styleUrl: './course-card-component.component.scss'
})

export class CourseCardComponentComponent {
  courses = [
    { name: 'Bootstrap 5', img: 'assets/images/bootstrap-course.svg', alt: 'bootstrap-course' },
    { name: 'HTML 5', img: 'assets/images/html5-course.svg', alt: 'html5-course' },
    { name: 'C++', img: 'assets/images/c++ course.svg', alt: 'c++ course' },
    { name: 'Angular', img: 'assets/images/angular-course.svg', alt: 'angular-course' },
    { name: 'Java', img: 'assets/images/java course.svg', alt: 'java-course' },
    { name: 'CSS', img: 'assets/images/css course.svg', alt: 'css-course' },
    { name: 'NODE JS', img: 'assets/images/node course.svg', alt: 'node-course' },
    { name: 'Excel', img: 'assets/images/excell course.svg', alt: 'excel-course' },
    { name: 'MS Office', img: 'assets/images/microsoft course.svg', alt: 'microsoft office-course' },
    { name: 'Figma', img: 'assets/images/figma course.svg', alt: 'figma-course' }
  ];

  hovered: any = null;

  onHover(course: any) {
    this.hovered = course;
  }

  onLeave() {
    this.hovered = null;
  }

}
