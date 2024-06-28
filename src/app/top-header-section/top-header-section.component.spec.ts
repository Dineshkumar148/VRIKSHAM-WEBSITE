import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeaderSectionComponent } from './top-header-section.component';

describe('TopHeaderSectionComponent', () => {
  let component: TopHeaderSectionComponent;
  let fixture: ComponentFixture<TopHeaderSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopHeaderSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopHeaderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
