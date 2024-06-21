import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOfferingCardComponent } from './service-offering-card.component';

describe('ServiceOfferingCardComponent', () => {
  let component: ServiceOfferingCardComponent;
  let fixture: ComponentFixture<ServiceOfferingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceOfferingCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceOfferingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
