import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPortfolioComponent } from './screen-portfolio.component';

describe('ScreenPortfolioComponent', () => {
  let component: ScreenPortfolioComponent;
  let fixture: ComponentFixture<ScreenPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
