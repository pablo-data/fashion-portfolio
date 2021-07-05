import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenHomeComponent } from './screen-home/screen-home.component';
import { ScreenCurriculumComponent } from './screen-curriculum/screen-curriculum.component';
import { ScreenAboutMeComponent } from './screen-about-me/screen-about-me.component';
import { ScreenPortfolioComponent } from './screen-portfolio/screen-portfolio.component';

import { AppRoutingModule } from './../app-routing.module';

import { TitlePagesComponent} from './../components/title-pages/title-pages.component';

@NgModule({
  declarations: [
    ScreenHomeComponent,
    ScreenCurriculumComponent,
    ScreenAboutMeComponent,
    ScreenPortfolioComponent,
    TitlePagesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ScreensModule { }
