import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { favoritsComponent } from './components/favorits/favorits.component';

import { MoviesComponent } from './components/movies/movies.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { SerieComponent } from './components/serie/serie.component';
import { PopularSeriesComponent } from './components/popular-series/popular-series.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ActorComponent } from './components/actor/actor.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MoviesService } from './movies.service';
import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {IvyCarouselModule} from 'angular-responsive-carousel';




@NgModule({
  declarations: [
    UiComponent,
    HomePageComponent,
    MovieCardComponent,
    MovieComponent,
    ActorComponent,
    FilterComponent,
    SearchComponent,
    SearchResultComponent,
    PopularSeriesComponent,
    SerieComponent,
    UpcomingComponent,
    MoviesComponent,
    favoritsComponent,
    ContactUsComponent

  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCarouselModule.forRoot(),
    NgbModule,
    IvyCarouselModule

  ],
  providers:[
    MoviesService
  ],
  exports: [
    UiComponent
  ]
})
export class UiModule { }
