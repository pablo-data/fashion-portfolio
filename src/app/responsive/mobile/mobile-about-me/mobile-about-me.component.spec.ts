import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAboutMeComponent } from './mobile-about-me.component';

describe('MobileAboutMeComponent', () => {
  let component: MobileAboutMeComponent;
  let fixture: ComponentFixture<MobileAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAboutMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
