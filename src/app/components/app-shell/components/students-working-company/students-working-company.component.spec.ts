import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsWorkingCompanyComponent } from './students-working-company.component';

describe('StudentsWorkingCompanyComponent', () => {
  let component: StudentsWorkingCompanyComponent;
  let fixture: ComponentFixture<StudentsWorkingCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsWorkingCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsWorkingCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
