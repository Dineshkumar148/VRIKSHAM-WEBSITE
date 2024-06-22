import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapTrainingComponent } from './sap-training.component';

describe('SapTrainingComponent', () => {
  let component: SapTrainingComponent;
  let fixture: ComponentFixture<SapTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SapTrainingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SapTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
