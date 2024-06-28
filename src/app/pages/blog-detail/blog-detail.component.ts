import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogService } from '../blog.service';
import { CommonModule, SlicePipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { TopHeaderSectionComponent } from '../../components/app-shell/components/top-header-section/top-header-section.component';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [RouterModule, SlicePipe, CommonModule, TopHeaderSectionComponent],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit, OnDestroy {
  blog: any;
  otherBlogs: any[] = [];
  blogGroups: any[][] = [];
  private subscriptions = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.route.paramMap.subscribe(params => {
        const blogId = params.get('id');
        if (blogId !== null) {
          this.blog = this.blogService.getBlog(+blogId);
          this.otherBlogs = this.blogService.getBlogs().filter(b => b.id !== +blogId);
          this.blogGroups = this.getBlogGroups();
        } else {
          console.error('Blog ID is null');
        }
      })
    );
  }
  
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getBlogGroups() {
    const groups = [];
    for (let i = 0; i < this.otherBlogs.length; i += 3) {
      groups.push(this.otherBlogs.slice(i, i + 3));
    }
    return groups;
  }
}
