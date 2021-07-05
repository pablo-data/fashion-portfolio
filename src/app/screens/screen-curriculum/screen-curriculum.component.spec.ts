import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenCurriculumComponent } from './screen-curriculum.component';

describe('ScreenCurriculumComponent', () => {
  let component: ScreenCurriculumComponent;
  let fixture: ComponentFixture<ScreenCurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenCurriculumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
