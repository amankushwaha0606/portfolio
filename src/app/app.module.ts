import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonService } from './common.service';
import { SocialMediaMenuComponent } from './components/social-media-menu/social-media-menu.component';
import { JourneyComponent } from './components/journey/journey.component';
import { JourneySegmentComponent } from './components/journey-segment/journey-segment.component';
import { ResumeComponent } from './components/resume/resume.component';
import { EducationComponent } from './components/education/education.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ContactComponent } from './components/contact/contact.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialMediaMenuComponent,
    JourneyComponent,
    JourneySegmentComponent,
    ResumeComponent,
    EducationComponent,
    AboutMeComponent,
    ProjectsComponent,
    TechStackComponent,
    ContactComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
