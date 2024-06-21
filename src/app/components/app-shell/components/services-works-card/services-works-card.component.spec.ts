import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesWorksCardComponent } from './services-works-card.component';

describe('ServicesWorksCardComponent', () => {
  let component: ServicesWorksCardComponent;
  let fixture: ComponentFixture<ServicesWorksCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesWorksCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesWorksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
