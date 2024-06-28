import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../../pages/blog.service';
import { SlicePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-carousel',
  standalone: true,
  imports: [RouterModule, SlicePipe],
  templateUrl: './blog-carousel.component.html',
  styleUrl: './blog-carousel.component.scss'
})
export class BlogCarouselComponent implements OnInit {
  blogs: any[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }
}