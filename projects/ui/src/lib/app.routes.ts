import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AuthGuard } from './../../../auth/src/lib/guard/auth.guard';
import { favoritsComponent } from './components/favorits/favorits.component';
import { MoviesComponent } from './components/movies/movies.component';
import { Routes } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';

import { PopularSeriesComponent } from './components/popular-series/popular-series.component';
import { SerieComponent } from './components/serie/serie.component';
import { ActorComponent } from './components/actor/actor.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchComponent } from './components/search/search.component';

import { HomePageComponent } from './components/home-page/home-page.component';
import { FilterComponent } from './components/filter/filter.component';

export const appRoutes: Routes = [
    {path: 'homepage', component: HomePageComponent,canActivate: [AuthGuard]},
    {path: 'movie/:id', component: MovieComponent,canActivate: [AuthGuard]},
    {path: 'tv/:id', component: SerieComponent,canActivate: [AuthGuard]},
    {path: 'actor/:id', component: ActorComponent,canActivate: [AuthGuard]},
    {path: 'popular/series', component: PopularSeriesComponent,canActivate: [AuthGuard]},
    {path: 'searchResults/:id/:genre', component: SearchResultComponent,canActivate: [AuthGuard]},
    {path: 'search', component: SearchComponent,canActivate: [AuthGuard]},
    {path: 'filter', component: FilterComponent,canActivate: [AuthGuard]},
    {path: 'movies', component: MoviesComponent,canActivate: [AuthGuard]},
    {path: 'favorits', component: favoritsComponent,canActivate: [AuthGuard]},
    {path: 'contactUs', component: ContactUsComponent,canActivate: [AuthGuard]},

];
