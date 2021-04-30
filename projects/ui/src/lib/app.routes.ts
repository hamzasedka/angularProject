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
    {path: 'homepage', component: HomePageComponent},
    {path: 'movie/:id', component: MovieComponent},
    {path: 'tv/:id', component: SerieComponent},
    {path: 'actor/:id', component: ActorComponent},
    {path: 'popular/series', component: PopularSeriesComponent},
    {path: 'searchResults/:id/:genre', component: SearchResultComponent},
    {path: 'search', component: SearchComponent},
    {path: 'filter', component: FilterComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'favorits', component: favoritsComponent},

];
