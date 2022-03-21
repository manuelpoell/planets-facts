import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MpFooterComponent } from './components/mp-footer/mp-footer.component';
import { PlanetInfoComponent } from './components/planet-info/planet-info.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { MobileButtonGroupComponent } from './components/mobile-button-group/mobile-button-group.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonGroupComponent,
    NavigationBarComponent,
    MpFooterComponent,
    PlanetInfoComponent,
    InfoCardComponent,
    MobileButtonGroupComponent,
    MobileMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
