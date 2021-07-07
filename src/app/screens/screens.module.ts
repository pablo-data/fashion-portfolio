import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenHomeComponent } from './screen-home/screen-home.component';
import { ScreenCurriculumComponent } from './screen-curriculum/screen-curriculum.component';
import { ScreenAboutMeComponent } from './screen-about-me/screen-about-me.component';
import { ScreenPortfolioComponent } from './screen-portfolio/screen-portfolio.component';

import { AppRoutingModule } from './../app-routing.module';

import { TitlePagesComponent} from './../components/title-pages/title-pages.component';

import { DesktopAboutMeComponent } from '../responsive/desktop/desktop-about-me/desktop-about-me.component';
import { DesktopCurriculumComponent } from '../responsive/desktop/desktop-curriculum/desktop-curriculum.component';
import { DesktopHomeComponent } from '../responsive/desktop/desktop-home/desktop-home.component';
import { DesktopPortfolioComponent } from '../responsive/desktop/desktop-portfolio/desktop-portfolio.component';
import { MobileAboutMeComponent } from '../responsive/mobile/mobile-about-me/mobile-about-me.component';
import { MobileCurriculumComponent } from '../responsive/mobile/mobile-curriculum/mobile-curriculum.component';
import { MobileHomeComponent } from '../responsive/mobile/mobile-home/mobile-home.component';
import { MobilePortfolioComponent } from '../responsive/mobile/mobile-portfolio/mobile-portfolio.component';
import { MobileTitlePagesComponent } from '../responsive/mobile/mobile-title-pages/mobile-title-pages.component';

@NgModule({
  declarations: [
    ScreenHomeComponent,
    ScreenCurriculumComponent,
    ScreenAboutMeComponent,
    ScreenPortfolioComponent,
    TitlePagesComponent,
    DesktopAboutMeComponent,
    DesktopCurriculumComponent,
    DesktopHomeComponent,
    DesktopPortfolioComponent,
    MobileAboutMeComponent,
    MobileCurriculumComponent,
    MobileHomeComponent,
    MobilePortfolioComponent,
    MobileTitlePagesComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ScreensModule { }
