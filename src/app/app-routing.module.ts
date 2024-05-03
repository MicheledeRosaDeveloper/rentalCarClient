import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarParkComponent } from './components/page/car-park/car-park.component';
import { LoginComponent } from './components/page/login/login.component';
import { HomepageComponent } from './components/page/homepage/homepage.component';
import { ProfileComponent } from './components/page/profile/profile.component';

const routes: Routes = [
  {path: 'car-park', component: CarParkComponent},
  {path: 'login', component: LoginComponent},
  {path: 'homepage', component: HomepageComponent},
  {path:'profile', component: ProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
