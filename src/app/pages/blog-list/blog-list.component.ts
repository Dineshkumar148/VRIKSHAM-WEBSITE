import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { RouterModule } from '@angular/router';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterModule, SlicePipe],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit {
  blogs: any[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }
}
