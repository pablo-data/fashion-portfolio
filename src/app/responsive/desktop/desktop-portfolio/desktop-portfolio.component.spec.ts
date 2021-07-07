import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopPortfolioComponent } from './desktop-portfolio.component';

describe('DesktopPortfolioComponent', () => {
  let component: DesktopPortfolioComponent;
  let fixture: ComponentFixture<DesktopPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
