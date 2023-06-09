import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { BannerComponent } from './header/banner/banner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServicesComponent } from './services/services.component';
import { CardsComponent } from './services/cards/cards.component';
import { DesignComponent } from './services/design/design.component';
import { AboutComponent } from './about/about.component';
import { WebTrafficComponent } from './about/web-traffic/web-traffic.component';
import { WebServicesComponent } from './about/web-services/web-services.component';
import { OurVisionComponent } from './about/our-vision/our-vision.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    BannerComponent,
    ServicesComponent,
    CardsComponent,
    DesignComponent,
    AboutComponent,
    WebTrafficComponent,
    WebServicesComponent,
    OurVisionComponent,
    PortfolioComponent,
    TeamComponent,
    TestimonialComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
