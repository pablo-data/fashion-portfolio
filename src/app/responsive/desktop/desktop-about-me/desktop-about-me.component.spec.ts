import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopAboutMeComponent } from './desktop-about-me.component';

describe('DesktopAboutMeComponent', () => {
  let component: DesktopAboutMeComponent;
  let fixture: ComponentFixture<DesktopAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopAboutMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
