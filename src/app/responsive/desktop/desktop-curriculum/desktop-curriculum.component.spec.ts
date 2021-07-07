import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopCurriculumComponent } from './desktop-curriculum.component';

describe('DesktopCurriculumComponent', () => {
  let component: DesktopCurriculumComponent;
  let fixture: ComponentFixture<DesktopCurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopCurriculumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
