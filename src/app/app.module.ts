import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/page/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CarParkComponent } from './components/page/car-park/car-park.component';
import { HomepageComponent } from './components/page/homepage/homepage.component';
import { ProfileComponent } from './components/page/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { CustomFormComponent } from './components/custom-form/custom-form.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarParkComponent,
    HomepageComponent,
    ProfileComponent,
    NavbarComponent,
    CustomTableComponent,
    CustomFormComponent,
    CustomButtonComponent,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
