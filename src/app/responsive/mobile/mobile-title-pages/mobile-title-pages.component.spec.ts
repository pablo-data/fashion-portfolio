import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTitlePagesComponent } from './mobile-title-pages.component';

describe('MobileTitlePagesComponent', () => {
  let component: MobileTitlePagesComponent;
  let fixture: ComponentFixture<MobileTitlePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileTitlePagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTitlePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
