import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAboutMeComponent } from './screen-about-me.component';

describe('ScreenAboutMeComponent', () => {
  let component: ScreenAboutMeComponent;
  let fixture: ComponentFixture<ScreenAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenAboutMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
