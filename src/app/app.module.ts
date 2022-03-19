import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MpFooterComponent } from './components/mp-footer/mp-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonGroupComponent,
    NavigationBarComponent,
    MpFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
