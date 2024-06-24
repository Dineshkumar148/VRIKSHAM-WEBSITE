import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogs = [
    {
      id: 1,
      title: 'The Benefits Of SAP Integration for Small Business',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: '28',
      month: 'Jan',
      blogCoverImage: 'assets/images/blog-card-1.png',
      altText: ''
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices in SAP Implementations',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: '08',
      month: 'Feb',
      blogCoverImage: 'assets/images/blog-card-2.png',
    },
    {
      id: 3,
      title: '5 Tips for First-Time Home Sellers',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: '26',
      month: 'Mar',
      blogCoverImage: 'assets/images/blog-card-3.png',
    },
    {
      id: 4,
      title: 'Lorem Ipsum is simply dummy text of the',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: '28',
      month: 'Jan',
      blogCoverImage: 'assets/images/blog-card-4.png',
    },
    {
      id: 5,
      title: 'Lorem Ipsum is simply dummy text of the',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: '28',
      month: 'Jan',
      blogCoverImage: 'assets/images/blog-card-5.png',
    },
    {
      id: 6,
      title: 'Lorem Ipsum is simply dummy text of the',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: '28',
      month: 'Jan',
      blogCoverImage: 'assets/images/blog-card-6.png',
    }
  ];

  constructor() {}

  getBlogs() {
    return this.blogs;
  }

  getBlog(id: number) {
    return this.blogs.find((blog) => blog.id === id);
  }
}
