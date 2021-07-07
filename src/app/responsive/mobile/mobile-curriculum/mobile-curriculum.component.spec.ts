import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCurriculumComponent } from './mobile-curriculum.component';

describe('MobileCurriculumComponent', () => {
  let component: MobileCurriculumComponent;
  let fixture: ComponentFixture<MobileCurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileCurriculumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
