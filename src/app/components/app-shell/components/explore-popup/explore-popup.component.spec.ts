import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePopupComponent } from './explore-popup.component';

describe('ExplorePopupComponent', () => {
  let component: ExplorePopupComponent;
  let fixture: ComponentFixture<ExplorePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExplorePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
