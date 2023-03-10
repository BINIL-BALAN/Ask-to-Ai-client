import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatSectionComponent } from './chat-section/chat-section.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegistrationComponent } from './registration/registration.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import{ HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TrySamplePageComponent } from './try-sample-page/try-sample-page.component';
import { DemoChatSectionComponent } from './demo-chat-section/demo-chat-section.component';
@NgModule({
  declarations: [
    AppComponent,
    ChatSectionComponent,
    HomePageComponent,
    LoginComponent,
    NavBarComponent,
    RegistrationComponent,
    SideBarComponent,
    LandingPageComponent,
    TrySamplePageComponent,
    DemoChatSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
