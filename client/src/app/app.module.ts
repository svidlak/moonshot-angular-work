import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//additional libraries
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DoctorsService } from './doctors.service';
import { AuthService } from './auth/auth.service';
import { AgmCoreModule } from '@agm/core';
import { DragulaModule } from 'ng2-dragula';
//components
import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { CallbackComponent } from './callback.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorsMobileComponent } from './doctors-mobile/doctors-mobile.component';
import { MobileReviewsComponent } from './mobile-reviews/mobile-reviews.component';
import { MobileAboutComponent } from './mobile-about/mobile-about.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    CallbackComponent,
    HeaderComponent,
    FooterComponent,
    ReviewsComponent,
    DoctorComponent,
    DoctorsMobileComponent,
    MobileReviewsComponent,
    MobileAboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBLMYOXndOguRrYOUjyina0D9n8khIQHqs'
    }),
    DragulaModule
  ],
  providers: [
    DoctorsService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
