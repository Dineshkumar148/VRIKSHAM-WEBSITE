import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardComponentComponent } from './course-card-component.component';

describe('CourseCardComponentComponent', () => {
  let component: CourseCardComponentComponent;
  let fixture: ComponentFixture<CourseCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
