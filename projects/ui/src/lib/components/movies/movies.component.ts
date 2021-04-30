import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  [x: string]: any;
  popularList: Array<any>;
  upComming: Array<any>;
  topRatedList: Array<any>;
  searchRes: Array<any>;
  searchStr: string;
  page: number;
  total: number;
  option:string;
  TopRatedSeries: Array<any>;
  constructor(private _moviesService: MoviesService,
    private router: ActivatedRoute,
    ) {
    this.page = 1;
  }
  ngOnInit() {



    this._moviesService.getTopRatedMovies(this.page).subscribe(res => {
      this.topRatedList = res.results.slice(0,6);
      // this.searchbyPage(this.page);
    });
    this._moviesService.getPopular().subscribe(res => {
      this.popularList = res.results.slice(0, 6);
    });
    this._moviesService.getPopularSeries().subscribe(res => {
      this.PopularSeries = res.results.slice(0,6);
    });
    this._moviesService.getUpComingMovies().subscribe(res => {
      this.upComming = res.results.slice(6,12);
    });

  }
  searchMovies() {
    this._moviesService.searchMovies(this.searchStr, this.option).subscribe(res => {
      this.searchRes = res.results;
    })
  }





}
