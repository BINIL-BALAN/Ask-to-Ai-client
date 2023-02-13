import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TrySamplePageComponent } from './try-sample-page/try-sample-page.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'landing-page',
    pathMatch:'full'
  },
  {
    path:'landing-page',
    component:LandingPageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'register',
    component:RegistrationComponent
  },
  {
    path:'try-sample',
    component:TrySamplePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
