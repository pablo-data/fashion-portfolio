import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreensModule } from './screens/screens.module';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { DesktopFooterComponent } from './responsive/desktop/desktop-footer/desktop-footer.component';
import { MobileFooterComponent } from './responsive/mobile/mobile-footer/mobile-footer.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidenavComponent,
    DesktopFooterComponent,
    MobileFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScreensModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
