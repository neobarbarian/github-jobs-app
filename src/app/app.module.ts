import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchbarComponent } from './job-board/searchbar/searchbar.component';
import { HeaderComponent } from './header/header.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { GithubJobsService } from './services/github-jobs.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    HeaderComponent,
    JobDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [GithubJobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
