import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ScreenHomeComponent } from './screens/screen-home/screen-home.component';
import { ScreenCurriculumComponent } from './screens/screen-curriculum/screen-curriculum.component';
import { ScreenAboutMeComponent } from './screens/screen-about-me/screen-about-me.component';
import { ScreenPortfolioComponent } from './screens/screen-portfolio/screen-portfolio.component';

const routes: Routes = [
  {
    path: 'home',
    component:ScreenHomeComponent 
  },
  {
    path: 'portfolio',
    component:ScreenPortfolioComponent 
  },
  {
    path: 'about',
    component:ScreenAboutMeComponent 
  },
  {
    path: 'curriculum',
    component:ScreenCurriculumComponent 
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full', 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: "reload",
    anchorScrolling:'enabled',
    scrollPositionRestoration: 'enabled',
    preloadingStrategy : PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
